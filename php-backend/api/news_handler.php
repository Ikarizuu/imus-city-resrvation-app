<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

require_once "../config.php";

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

/* GET: Retrieve published news cards for public display */
if ($method === 'GET' && !isset($_GET['admin'])) {
    $limit = isset($_GET['limit']) ? intval($_GET['limit']) : 10;
    $offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;
    $status = isset($_GET['status']) ? $_GET['status'] : 'active';

    try {
        // Build query for published/active cards
        $sql = "SELECT id, title, excerpt, image_path, image_alt, link, display_order, status, news_date, updated_at 
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
    exit;
}

/* GET: Retrieve all news cards for admin */
if ($method === 'GET' && isset($_GET['admin'])) {
    
    $status = isset($_GET['status']) ? $_GET['status'] : 'all';
    
    try {
        $sql = "SELECT * FROM news_carousel_items";
        if ($status !== 'all') {
            $sql .= " WHERE status = ?";
        }
        $sql .= " ORDER BY display_order ASC, updated_at DESC";
        
        $stmt = $conn->prepare($sql);
        if ($status !== 'all') {
            $stmt->bind_param('s', $status);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        
        $items = [];
        while ($row = $result->fetch_assoc()) {
            $items[] = $row;
        }
        
        echo json_encode([
            'success' => true,
            'news' => $items,
            'total' => count($items)
        ]);
        
        $stmt->close();
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Database error: ' . $e->getMessage()
        ]);
    }
    exit;
}

/* POST: Create new news card */
if ($method === 'POST' && !isset($_GET['action'])) {
    // TODO: Add admin authentication check here
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        echo json_encode(["success" => false, "message" => "No data received"]);
        exit;
    }
    
    // Validate required fields
    $requiredFields = ['title', 'excerpt'];
    foreach ($requiredFields as $field) {
        if (!isset($input[$field]) || empty($input[$field])) {
            echo json_encode(["success" => false, "message" => "Missing required field: $field"]);
            exit;
        }
    }
    
    // Sanitize input data
    $title = $conn->real_escape_string($input['title']);
    $excerpt = $conn->real_escape_string($input['excerpt']);
    $image_path = isset($input['image_path']) ? $conn->real_escape_string($input['image_path']) : null;
    $image_alt = isset($input['image_alt']) ? $conn->real_escape_string($input['image_alt']) : null;
    $link = isset($input['link']) ? $conn->real_escape_string($input['link']) : null;
    $display_order = isset($input['display_order']) ? intval($input['display_order']) : 0;
    $status = isset($input['status']) ? $conn->real_escape_string($input['status']) : 'active';
    $news_date = isset($input['news_date']) ? $conn->real_escape_string($input['news_date']) : null;
    
    try {
        $sql = "INSERT INTO news_carousel_items 
                (title, excerpt, image_path, image_alt, link, display_order, status, news_date) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('sssssiss', 
            $title, $excerpt, $image_path, $image_alt, $link, $display_order, $status, $news_date);
        
        $stmt->execute();
        $newId = $stmt->insert_id;
        
        echo json_encode([
            "success" => true, 
            "message" => "News card created successfully",
            "id" => $newId
        ]);
        
        $stmt->close();
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false, 
            "message" => "Failed to create news card: " . $e->getMessage()
        ]);
    }
    exit;
}

/* PUT: Update existing news card */
if ($method === 'PUT' || ($method === 'POST' && isset($_GET['action']) && $_GET['action'] === 'update')) {
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['id'])) {
        echo json_encode(["success" => false, "message" => "Missing news card ID"]);
        exit;
    }
    
    $id = intval($input['id']);
    
    // Build update query dynamically based on provided fields
    $updates = [];
    $types = '';
    $values = [];
    
    // Define field mappings
    $fieldMap = [
        'title' => 's',
        'excerpt' => 's',
        'image_path' => 's',
        'image_alt' => 's',
        'link' => 's',
        'display_order' => 'i',
        'status' => 's',
        'news_date' => 's'
    ];
    
    foreach ($fieldMap as $field => $type) {
        if (isset($input[$field])) {
            $updates[] = "$field = ?";
            $types .= $type;
            $values[] = $conn->real_escape_string($input[$field]);
        }
    }
    
    if (empty($updates)) {
        echo json_encode(["success" => false, "message" => "No fields to update"]);
        exit;
    }
    
    // Add ID to the end
    $values[] = $id;
    $types .= 'i';
    
    try {
        $sql = "UPDATE news_carousel_items SET " . implode(', ', $updates) . ", updated_at = NOW() WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param($types, ...$values);
        $stmt->execute();
        
        if ($stmt->affected_rows > 0) {
            echo json_encode([
                "success" => true,
                "message" => "News card updated successfully"
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "No changes made or news card not found"
            ]);
        }
        
        $stmt->close();
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Failed to update news card: " . $e->getMessage()
        ]);
    }
    exit;
}

/* DELETE */
if ($method === 'DELETE' || ($method === 'POST' && isset($_GET['action']) && $_GET['action'] === 'delete')) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['id'])) {
        echo json_encode(["success" => false, "message" => "Missing news card ID"]);
        exit;
    }
    
    $id = intval($input['id']);
    
    try {
        // First, get image path to potentially delete file
        $getStmt = $conn->prepare("SELECT image_path FROM news_carousel_items WHERE id = ?");
        $getStmt->bind_param('i', $id);
        $getStmt->execute();
        $result = $getStmt->get_result();
        $item = $result->fetch_assoc();
        $getStmt->close();
        
        // Delete the news card
        $stmt = $conn->prepare("DELETE FROM news_carousel_items WHERE id = ?");
        $stmt->bind_param('i', $id);
        $stmt->execute();
        
        if ($stmt->affected_rows > 0) {
            // Optionally delete image file
            if ($item && $item['image_path']) {
                $imagePath = __DIR__ . '/../uploads/news-carousel/' . $item['image_path'];
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }
            }
            
            echo json_encode([
                "success" => true,
                "message" => "News card deleted successfully"
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "News card not found"
            ]);
        }
        
        $stmt->close();
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Failed to delete news card: " . $e->getMessage()
        ]);
    }
    exit;
}

/* FALLBACK - Method not allowed */
http_response_code(405);
echo json_encode([
    "success" => false,
    "message" => "Method not allowed. Use GET, POST, PUT, or DELETE"
]);

$conn->close();
?>