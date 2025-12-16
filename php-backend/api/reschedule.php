<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET");
header("Content-Type: application/json");

require_once "../config.php";

//Get the HTTP method
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    handleRescheduleRequest();
} elseif ($method === 'GET') {
    handleGenerateQueueId();
} else {
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
}

//Handle rescheduling request
function handleRescheduleRequest() {
    global $conn;
    
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input) {
        echo json_encode(["success" => false, "message" => "No data received"]);
        return;
    }
    
    //Check if it's a queue ID generation request
    if (isset($input['action']) && $input['action'] === 'generateQueueId') {
        if (!isset($input['date'])) {
            echo json_encode(["success" => false, "message" => "Date is required"]);
            return;
        }
        generateQueueId($input['date']);
        return;
    }
    
    //Otherwise, it's a full reschedule request
    $requiredFields = ['queueId', 'form', 'fullName', 'email', 'date', 'time', 'originalQueueId'];
    foreach ($requiredFields as $field) {
        if (!isset($input[$field]) || empty($input[$field])) {
            echo json_encode(["success" => false, "message" => "Missing required field: $field"]);
            return;
        }
    }
    
    //Check if new slot is available
    $date = $conn->real_escape_string($input['date']);
    $time = $conn->real_escape_string($input['time']);
    $form = $conn->real_escape_string($input['form']);
    $newQueueId = $conn->real_escape_string($input['queueId']);
    $originalQueueId = $conn->real_escape_string($input['originalQueueId']);
    
    //Check if new slot is already taken (excluding the original reservation)
    $checkSql = "SELECT id FROM reservations 
        WHERE reservation_date = '$date' 
            AND reservation_time = '$time' 
            AND form_name = '$form'
            AND queue_id != '$originalQueueId'
            AND status != 'Cancelled'";
    
    $checkResult = $conn->query($checkSql);
    
    if ($checkResult && $checkResult->num_rows > 0) {
        echo json_encode(["success" => false, "message" => "This new time slot is already taken"]);
        return;
    }
    
    //Create new rescheduled reservation
    $fullName = $conn->real_escape_string($input['fullName']);
    $email = $conn->real_escape_string($input['email']);
    $actionDate = date('Y-m-d'); //Current date
    $status = isset($input['status']) ? $conn->real_escape_string($input['status']) : 'Pending';
    $remarks = isset($input['remarks']) ? $conn->real_escape_string($input['remarks']) : '';
    
    //Start transaction
    $conn->begin_transaction();
    
    try {
        //1. Insert new rescheduled reservation
        $insertSql = "INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) 
            VALUES ('$newQueueId', '$form', '$fullName', '$email', '$date', '$time', '$actionDate', '$status', '$remarks')";
        
        if (!$conn->query($insertSql)) {
            throw new Exception("Failed to create rescheduled reservation: " . $conn->error);
        }
        
        //2. Update original reservation to mark it as rescheduled
        $updateRemarks = "Rescheduled to $date at $time. New Queue ID: $newQueueId";
        if (isset($input['originalRemarks']) && !empty($input['originalRemarks'])) {
            $updateRemarks = $conn->real_escape_string($input['originalRemarks']) . "\n" . $updateRemarks;
        }
        
        $updateSql = "UPDATE reservations 
            SET status = 'Rescheduled', 
                remarks = '$updateRemarks' 
            WHERE queue_id = '$originalQueueId'";
        
        if (!$conn->query($updateSql)) {
            throw new Exception("Failed to update original reservation: " . $conn->error);
        }
        
        //Commit transaction
        $conn->commit();
        
        echo json_encode([
            "success" => true, 
            "message" => "Reservation successfully rescheduled",
            "newQueueId" => $newQueueId,
            "originalQueueId" => $originalQueueId
        ]);
        
    } catch (Exception $e) {
        //Rollback transaction on error
        $conn->rollback();
        echo json_encode(["success" => false, "message" => $e->getMessage()]);
    }
}

//Handle queue ID generation (for GET requests or separate calls)
function handleGenerateQueueId() {
    global $conn;
    
    if (!isset($_GET['date'])) {
        echo json_encode(["success" => false, "message" => "Date parameter is required"]);
        return;
    }
    
    $date = $conn->real_escape_string($_GET['date']);
    generateQueueId($date);
}

//Generate a unique queue ID for a given date
function generateQueueId($date) {
    global $conn;
    
    $year = date('y', strtotime($date));
    $month = date('m', strtotime($date));
    $day = date('d', strtotime($date));
    $datePrefix = $year . $month . $day;
    
    //Find the highest sequence for this date
    $sql = "SELECT queue_id FROM reservations 
            WHERE queue_id LIKE '$datePrefix%' 
            AND status != 'Cancelled' 
            ORDER BY queue_id DESC LIMIT 1";
    
    $result = $conn->query($sql);
    
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $lastQueueId = $row['queue_id'];
        $lastSequence = intval(substr($lastQueueId, -3));
        $nextSequence = $lastSequence + 1;
    } else {
        $nextSequence = 1;
    }
    
    //Format sequence to 3 digits
    $sequenceStr = str_pad($nextSequence, 3, '0', STR_PAD_LEFT);
    $queueId = $datePrefix . $sequenceStr;
    
    echo json_encode([
        "success" => true, 
        "queueId" => $queueId,
        "datePrefix" => $datePrefix,
        "sequence" => $sequenceStr
    ]);
}

$conn->close();
?>