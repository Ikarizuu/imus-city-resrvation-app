<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "../config.php";

if (!isset($_GET['queue_id'])) {
    echo json_encode(["success" => false, "message" => "Queue ID is required"]);
    exit;
}

$queueId = $conn->real_escape_string($_GET['queue_id']);

$sql = "SELECT * FROM reservations WHERE queue_id = '$queueId'";
$result = $conn->query($sql);

if (!$result) {
    echo json_encode(["success" => false, "message" => "Database error: " . $conn->error]);
    exit;
}

if ($result->num_rows > 0) {
    $reservation = $result->fetch_assoc();
    
    // Format time for display (remove seconds)
    if (isset($reservation['reservation_time'])) {
        $reservation['reservation_time_display'] = substr($reservation['reservation_time'], 0, 5);
    }
    
    echo json_encode([
        "success" => true,
        "reservation" => $reservation
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Reservation not found for Queue ID: $queueId"
    ]);
}

$conn->close();
?>