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

// Get query parameters
$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 6;
$offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;
$status = isset($_GET['status']) ? $_GET['status'] : 'active';

try {
    // Build query for active news carousel items
    $sql = "SELECT id, title, excerpt, image_path, image_alt, link, display_order, news_date 
            FROM news_carousel_items 
            WHERE status = ? 
            ORDER BY display_order ASC, updated_at DESC 
            LIMIT ? OFFSET ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sii', $status, $limit, $offset);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $items = [];
    while ($row = $result->fetch_assoc()) {
        $items[] = $row;
    }
    
    // Get total count for pagination
    $countSql = "SELECT COUNT(*) as total FROM news_carousel_items WHERE status = ?";
    $countStmt = $conn->prepare($countSql);
    $countStmt->bind_param('s', $status);
    $countStmt->execute();
    $countResult = $countStmt->get_result();
    $total = $countResult->fetch_assoc()['total'];
    
    echo json_encode([
        'success' => true,
        'news' => $items,
        'total' => $total,
        'limit' => $limit,
        'offset' => $offset
    ]);
    
    $stmt->close();
    $countStmt->close();
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}

$conn->close();
?>