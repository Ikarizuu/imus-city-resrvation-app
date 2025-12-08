<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json");

require_once "../config.php";

// Handle both GET and POST for flexibility
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $date = isset($_GET['date']) ? $conn->real_escape_string($_GET['date']) : '';
    $time = isset($_GET['time']) ? $conn->real_escape_string($_GET['time']) : '';
    $form = isset($_GET['form']) ? $conn->real_escape_string($_GET['form']) : '';
} else {
    $input = json_decode(file_get_contents("php://input"), true);
    $date = isset($input['date']) ? $conn->real_escape_string($input['date']) : '';
    $time = isset($input['time']) ? $conn->real_escape_string($input['time']) : '';
    $form = isset($input['form']) ? $conn->real_escape_string($input['form']) : '';
}

if (empty($date) || empty($time) || empty($form)) {
    echo json_encode(["success" => false, "message" => "Missing required parameters"]);
    exit;
}

// Check if slot is available
$sql = "SELECT id, queue_id, full_name FROM reservations 
        WHERE reservation_date = '$date' 
        AND reservation_time = '$time'
        AND form_name = '$form'
        AND status != 'Cancelled'";

$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode([
        "success" => false, 
        "available" => false,
        "message" => "Slot already taken",
        "reservedBy" => $row['full_name'],
        "queueId" => $row['queue_id']
    ]);
} else {
    echo json_encode([
        "success" => true, 
        "available" => true,
        "message" => "Slot is available"
    ]);
}

$conn->close();
?>