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
    
    //Debug logging
    error_log("=== RESERVATIONS.PHP DEBUG ===");
    error_log("GET params: " . print_r($_GET, true));
    
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
    
    //Initialize SQL query - IMPORTANT: Start with WHERE 1=1
    $sql = "SELECT * FROM reservations WHERE 1=1";
    $conditions = [];
    
    //Check for date range (Week filter)
    if (isset($_GET['startDate']) && isset($_GET['endDate'])) {
        $startDate = $conn->real_escape_string($_GET['startDate']);
        $endDate = $conn->real_escape_string($_GET['endDate']);
        $conditions[] = "reservation_date BETWEEN '$startDate' AND '$endDate'";
        error_log("Added week filter: $startDate to $endDate");
    }
    //Check for month and year filter
    elseif (isset($_GET['year']) && isset($_GET['month'])) {
        $year = $conn->real_escape_string($_GET['year']);
        $month = $conn->real_escape_string($_GET['month']);
        $conditions[] = "YEAR(reservation_date) = '$year' AND MONTH(reservation_date) = '$month'";
        error_log("Added month filter: $year-$month");
    }
    //Check for year only filter
    elseif (isset($_GET['year']) && !isset($_GET['month'])) {
        $year = $conn->real_escape_string($_GET['year']);
        $conditions[] = "YEAR(reservation_date) = '$year'";
        error_log("Added year filter: $year");
    }
    //Check if filtering by date only
    elseif (isset($_GET['date'])) {
        $date = $conn->real_escape_string($_GET['date']);
        $conditions[] = "reservation_date = '$date'";
        error_log("Added date filter: $date");
    }
    
    if (isset($_GET['form'])) {
        $formParam = $_GET['form'];
        error_log("Form parameter received: '$formParam'");
        
        //Only filter if it's not "All Reservations"
        if ($formParam !== 'All Reservations' && !empty($formParam)) {
            $form = $conn->real_escape_string($formParam);
            $conditions[] = "form_name = '$form'";
            error_log("Applied form filter: $form");
        } else {
            error_log("Skipping form filter (All Reservations or empty)");
        }
    } else {
        error_log("No form parameter in request");
    }
    
    //Add all conditions to SQL
    if (count($conditions) > 0) {
        $sql .= " AND " . implode(" AND ", $conditions);
    }
    
    //Add ordering
    $sql .= " ORDER BY reservation_date DESC, reservation_time";
    
    error_log("Final SQL: $sql");
    
    $result = $conn->query($sql);
    $reservations = [];
    
    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $reservations[] = $row;
        }
    }
    
    error_log("Returning " . count($reservations) . " reservations");
    if (count($reservations) > 0) {
        $uniqueForms = array_unique(array_column($reservations, 'form_name'));
        error_log("Unique forms in result: " . implode(", ", $uniqueForms));
    }
    error_log("==============================");
    
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