<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

require_once "../config.php";

// Get the HTTP method
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        handleGet();
        break;
    case 'POST':
        handlePost();
        break;
    case 'PUT':
        handlePut();
        break;
    case 'DELETE':
        handleDelete();
        break;
    default:
        echo json_encode(["success" => false, "message" => "Method not allowed"]);
}

function handleGet() {
    global $conn;
    
    //Check if requesting available slots
    if (isset($_GET['available_slots']) && $_GET['available_slots'] === 'true') {
        if (isset($_GET['date']) && isset($_GET['form'])) {
            $date = $conn->real_escape_string($_GET['date']);
            $form = $conn->real_escape_string($_GET['form']);
            
            $availableSlots = getAvailableSlots($date, $form);
            echo json_encode([
                "success" => true,
                "date" => $date,
                "form" => $form,
                "availableSlots" => $availableSlots
            ]);
            return;
        }
    }
    
    //Check for date range (Week filter)
    if (isset($_GET['startDate']) && isset($_GET['endDate'])) {
        $startDate = $conn->real_escape_string($_GET['startDate']);
        $endDate = $conn->real_escape_string($_GET['endDate']);
        $sql = "SELECT * FROM reservations WHERE reservation_date BETWEEN '$startDate' AND '$endDate'";
        
        if (isset($_GET['form']) && $_GET['form'] !== 'All Reservations') {
            $form = $conn->real_escape_string($_GET['form']);
            $sql .= " AND form_name = '$form'";
        }
        $sql .= " ORDER BY reservation_date, reservation_time";
    }
    //Check for month and year filter
    elseif (isset($_GET['year']) && isset($_GET['month'])) {
        $year = $conn->real_escape_string($_GET['year']);
        $month = $conn->real_escape_string($_GET['month']);
        $sql = "SELECT * FROM reservations WHERE YEAR(reservation_date) = '$year' AND MONTH(reservation_date) = '$month'";
        
        if (isset($_GET['form']) && $_GET['form'] !== 'All Reservations') {
            $form = $conn->real_escape_string($_GET['form']);
            $sql .= " AND form_name = '$form'";
        }
        $sql .= " ORDER BY reservation_date, reservation_time";
    }
    //Check for year only filter
    elseif (isset($_GET['year'])) {
        $year = $conn->real_escape_string($_GET['year']);
        $sql = "SELECT * FROM reservations WHERE YEAR(reservation_date) = '$year'";
        
        if (isset($_GET['form']) && $_GET['form'] !== 'All Reservations') {
            $form = $conn->real_escape_string($_GET['form']);
            $sql .= " AND form_name = '$form'";
        }
        $sql .= " ORDER BY reservation_date, reservation_time";
    }
    //Check if filtering by date and form
    elseif (isset($_GET['date']) && isset($_GET['form'])) {
        $date = $conn->real_escape_string($_GET['date']);
        $form = $conn->real_escape_string($_GET['form']);
        
        $sql = "SELECT * FROM reservations WHERE reservation_date = '$date' AND form_name = '$form' ORDER BY reservation_time";
    } 
    //Check if filtering by date only
    elseif (isset($_GET['date'])) {
        $date = $conn->real_escape_string($_GET['date']);
        $sql = "SELECT * FROM reservations WHERE reservation_date = '$date' ORDER BY reservation_time";
    }
    //Get all reservations
    else {
        $sql = "SELECT * FROM reservations ORDER BY reservation_date DESC, reservation_time";
    }
    
    $result = $conn->query($sql);
    $reservations = [];
    
    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $reservations[] = $row;
        }
    }
    
    echo json_encode($reservations);
}

function handlePost() {
    global $conn;
    
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input) {
        echo json_encode(["success" => false, "message" => "No data received"]);
        return;
    }
    
    //Required fields validation
    $requiredFields = ['queueId', 'form', 'fullName', 'email', 'date', 'time', 'actionDate'];
    foreach ($requiredFields as $field) {
        if (!isset($input[$field]) || empty($input[$field])) {
            echo json_encode(["success" => false, "message" => "Missing required field: $field"]);
            return;
        }
    }
    
    //Check if slot already exists (only for new reservations)
    $date = $conn->real_escape_string($input['date']);
    $time = $conn->real_escape_string($input['time']);
    $form = $conn->real_escape_string($input['form']);
    
    //Only check for duplicates if it's a new reservation (no queueId conflict)
    if (!isset($input['isReschedule']) || !$input['isReschedule']) {
        $checkSql = "SELECT id FROM reservations WHERE reservation_date = '$date' AND reservation_time = '$time' AND form_name = '$form' AND status != 'Cancelled'";
        $checkResult = $conn->query($checkSql);
        
        if ($checkResult && $checkResult->num_rows > 0) {
            echo json_encode(["success" => false, "message" => "This time slot is already taken"]);
            return;
        }
    }
    
    //Insert new reservation
    $queueId = $conn->real_escape_string($input['queueId']);
    $fullName = $conn->real_escape_string($input['fullName']);
    $email = $conn->real_escape_string($input['email']);
    $actionDate = $conn->real_escape_string($input['actionDate']);
    $status = isset($input['status']) ? $conn->real_escape_string($input['status']) : 'Pending';
    $remarks = isset($input['remarks']) ? $conn->real_escape_string($input['remarks']) : '';
    
    $sql = "INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) 
            VALUES ('$queueId', '$form', '$fullName', '$email', '$date', '$time', '$actionDate', '$status', '$remarks')";
    
    if ($conn->query($sql)) {
        echo json_encode(["success" => true, "message" => "Reservation created successfully", "queueId" => $queueId]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to create reservation: " . $conn->error]);
    }
}

function handlePut() {
    global $conn;
    
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input || !isset($input['queueId'])) {
        echo json_encode(["success" => false, "message" => "Missing queueId"]);
        return;
    }
    
    $queueId = $conn->real_escape_string($input['queueId']);
    $updates = [];
    
    if (isset($input['status'])) {
        $updates[] = "status = '" . $conn->real_escape_string($input['status']) . "'";
    }
    if (isset($input['remarks'])) {
        $updates[] = "remarks = '" . $conn->real_escape_string($input['remarks']) . "'";
    }
    if (isset($input['reservation_date'])) {
        $updates[] = "reservation_date = '" . $conn->real_escape_string($input['reservation_date']) . "'";
    }
    if (isset($input['reservation_time'])) {
        $updates[] = "reservation_time = '" . $conn->real_escape_string($input['reservation_time']) . "'";
    }
    
    if (empty($updates)) {
        echo json_encode(["success" => false, "message" => "No fields to update"]);
        return;
    }
    
    $sql = "UPDATE reservations SET " . implode(", ", $updates) . " WHERE queue_id = '$queueId'";
    
    if ($conn->query($sql)) {
        echo json_encode(["success" => true, "message" => "Reservation updated successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update reservation: " . $conn->error]);
    }
}

function handleDelete() {
    global $conn;
    
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input || !isset($input['queueId'])) {
        echo json_encode(["success" => false, "message" => "Missing queueId"]);
        return;
    }
    
    $queueId = $conn->real_escape_string($input['queueId']);
    $sql = "DELETE FROM reservations WHERE queue_id = '$queueId'";
    
    if ($conn->query($sql)) {
        if ($conn->affected_rows > 0) {
            echo json_encode(["success" => true, "message" => "Reservation deleted successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "No reservation found with that ID"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to delete reservation: " . $conn->error]);
    }
}

function getAvailableSlots($date, $form) {
    global $conn;
    
    $date = $conn->real_escape_string($date);
    $form = $conn->real_escape_string($form);
    
    //Get all booked slots for this date and form
    $sql = "SELECT reservation_time FROM reservations 
            WHERE reservation_date = '$date' 
            AND form_name = '$form'
            AND status IN ('Pending', 'Complete', 'Rescheduled')
            ORDER BY reservation_time";
    
    $result = $conn->query($sql);
    $bookedSlots = [];
    
    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $bookedSlots[] = $row['reservation_time'];
        }
    }
    
    //Generate all possible slots (8:00 AM to 4:30 PM, 30-minute intervals)
    $allSlots = [];
    $startTime = strtotime('08:00');
    $endTime = strtotime('16:30');
    
    while ($startTime <= $endTime) {
        $timeStr = date('H:i', $startTime);
        $allSlots[] = [
            'time' => $timeStr,
            'available' => !in_array($timeStr, $bookedSlots)
        ];
        $startTime = strtotime('+30 minutes', $startTime);
    }
    
    return $allSlots;
}

$conn->close();
?>