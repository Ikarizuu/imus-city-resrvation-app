<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json");

require_once "../config.php";

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get only active statistics, ordered by display order
$sql = "SELECT stat_value, stat_label FROM statistics 
        WHERE is_active = TRUE 
        ORDER BY display_order, stat_name 
        LIMIT 10"; // Limit to 10 stats for display

$result = $conn->query($sql);
$stats = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $stats[] = [
            'value' => $row['stat_value'],
            'label' => $row['stat_label']
        ];
    }
    echo json_encode([
        "success" => true,
        "statistics" => $stats
    ]);
} else {
    // Return default stats if none found
    $defaultStats = [
        ['value' => '539,743', 'label' => 'Population'],
        ['value' => '101.56', 'label' => 'Persons/sq.km.'],
        ['value' => '130,814', 'label' => 'Number of households'],
        ['value' => '4.24%', 'label' => 'Population growth rate'],
        ['value' => '97', 'label' => 'Barangays']
    ];
    echo json_encode([
        "success" => true,
        "statistics" => $defaultStats,
        "message" => "Using default statistics"
    ]);
}

$conn->close();
?>