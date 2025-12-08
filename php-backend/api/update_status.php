<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "../config.php";

$input = json_decode(file_get_contents("php://input"), true);

// Debug logging (optional - remove in production)
error_log("Update Status Request: " . print_r($input, true));

if (!$input || !isset($input['queue_id']) || !isset($input['status'])) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

$queueId = $conn->real_escape_string($input['queue_id']);
$status = $conn->real_escape_string($input['status']);

// Validate status
$validStatuses = ['Pending', 'Complete', 'Cancelled', 'Rescheduled'];
if (!in_array($status, $validStatuses)) {
    echo json_encode(["success" => false, "message" => "Invalid status. Must be one of: " . implode(', ', $validStatuses)]);
    exit;
}

// First, check if reservation exists
$checkSql = "SELECT id FROM reservations WHERE queue_id = '$queueId'";
$checkResult = $conn->query($checkSql);

if (!$checkResult) {
    echo json_encode(["success" => false, "message" => "Database error: " . $conn->error]);
    exit;
}

if ($checkResult->num_rows === 0) {
    echo json_encode(["success" => false, "message" => "No reservation found with Queue ID: $queueId"]);
    exit;
}

// Update the status
$sql = "UPDATE reservations SET status = '$status', updated_at = NOW() WHERE queue_id = '$queueId'";

if ($conn->query($sql)) {
    if ($conn->affected_rows > 0) {
        echo json_encode([
            "success" => true, 
            "message" => "Status updated successfully",
            "queueId" => $queueId,
            "newStatus" => $status
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "No changes made. Status might already be '$status'"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Failed to update status: " . $conn->error]);
}

$conn->close();
?>