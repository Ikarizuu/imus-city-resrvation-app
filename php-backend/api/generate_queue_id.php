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

if (!$input || !isset($input['date'])) {
    echo json_encode(["success" => false, "message" => "Date is required"]);
    exit;
}

$date = $conn->real_escape_string($input['date']);

// Generate queue ID with format: YYMMDDXXX
// Example: 251215001 for December 15, 2025 (first reservation)
$year = date('y', strtotime($date));  // 2-digit year (25)
$month = date('m', strtotime($date)); // 2-digit month (12)
$day = date('d', strtotime($date));   // 2-digit day (15)
$datePrefix = $year . $month . $day;  // 251215

// Find the highest sequence number for this date
$sql = "SELECT queue_id FROM reservations 
        WHERE queue_id LIKE '$datePrefix%' 
        ORDER BY queue_id DESC 
        LIMIT 1";

$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    // Get the last queue ID and extract the sequence number
    $row = $result->fetch_assoc();
    $lastQueueId = $row['queue_id'];
    
    // Extract last 3 digits (sequence number)
    $lastSequence = intval(substr($lastQueueId, -3));
    $nextSequence = $lastSequence + 1;
} else {
    // First reservation for this date
    $nextSequence = 1;
}

// Format sequence to 3 digits with leading zeros
$sequenceStr = str_pad($nextSequence, 3, '0', STR_PAD_LEFT);

// Final queue ID: YYMMDDXXX (e.g., 251215001)
$queueId = $datePrefix . $sequenceStr;

echo json_encode([
    "success" => true, 
    "queueId" => $queueId,
    "datePrefix" => $datePrefix,
    "sequence" => $sequenceStr,
    "breakdown" => [
        "year" => $year,
        "month" => $month,
        "day" => $day,
        "sequenceNumber" => $nextSequence
    ]
]);

$conn->close();
?>