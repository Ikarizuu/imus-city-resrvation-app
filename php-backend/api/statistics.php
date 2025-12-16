<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

require_once "../config.php";

//Get the HTTP method
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
    case 'OPTIONS':
        http_response_code(200);
        break;
    default:
        echo json_encode(["success" => false, "message" => "Method not allowed"]);
}

//READ statistics
function handleGet() {
    global $conn;
    
    //Get all active statistics, ordered by display order
    $sql = "SELECT * FROM statistics WHERE is_active = TRUE ORDER BY display_order, stat_name";
    $result = $conn->query($sql);
    $stats = [];
    
    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $stats[] = $row;
        }
        echo json_encode([
            "success" => true,
            "statistics" => $stats,
            "count" => count($stats)
        ]);
    } else {
        echo json_encode([
            "success" => true,
            "statistics" => [],
            "count" => 0,
            "message" => "No statistics found"
        ]);
    }
}

//CREATE new statistic
function handlePost() {
    global $conn;
    
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input) {
        echo json_encode(["success" => false, "message" => "No data received"]);
        return;
    }
    
    //Validate required fields
    $requiredFields = ['stat_name', 'stat_value', 'stat_label'];
    foreach ($requiredFields as $field) {
        if (!isset($input[$field]) || empty($input[$field])) {
            echo json_encode(["success" => false, "message" => "Missing required field: $field"]);
            return;
        }
    }
    
    $stat_name = $conn->real_escape_string($input['stat_name']);
    $stat_value = $conn->real_escape_string($input['stat_value']);
    $stat_label = $conn->real_escape_string($input['stat_label']);
    $display_order = isset($input['display_order']) ? intval($input['display_order']) : 0;
    $is_active = isset($input['is_active']) ? ($input['is_active'] ? 1 : 0) : 1;
    
    //Check if statistic name already exists
    $checkSql = "SELECT id FROM statistics WHERE stat_name = '$stat_name'";
    $checkResult = $conn->query($checkSql);
    
    if ($checkResult && $checkResult->num_rows > 0) {
        echo json_encode(["success" => false, "message" => "Statistic with this name already exists"]);
        return;
    }
    
    //Insert new statistic
    $sql = "INSERT INTO statistics (stat_name, stat_value, stat_label, display_order, is_active) 
            VALUES ('$stat_name', '$stat_value', '$stat_label', $display_order, $is_active)";
    
    if ($conn->query($sql)) {
        $newId = $conn->insert_id;
        echo json_encode([
            "success" => true, 
            "message" => "Statistic created successfully",
            "id" => $newId
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to create statistic: " . $conn->error]);
    }
}

//UPDATE statistic
function handlePut() {
    global $conn;
    
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input || !isset($input['id'])) {
        echo json_encode(["success" => false, "message" => "Missing statistic ID"]);
        return;
    }
    
    $id = intval($input['id']);
    $updates = [];
    
    if (isset($input['stat_name'])) {
        $updates[] = "stat_name = '" . $conn->real_escape_string($input['stat_name']) . "'";
    }
    if (isset($input['stat_value'])) {
        $updates[] = "stat_value = '" . $conn->real_escape_string($input['stat_value']) . "'";
    }
    if (isset($input['stat_label'])) {
        $updates[] = "stat_label = '" . $conn->real_escape_string($input['stat_label']) . "'";
    }
    if (isset($input['display_order'])) {
        $updates[] = "display_order = " . intval($input['display_order']);
    }
    if (isset($input['is_active'])) {
        $updates[] = "is_active = " . ($input['is_active'] ? 1 : 0);
    }
    
    if (empty($updates)) {
        echo json_encode(["success" => false, "message" => "No fields to update"]);
        return;
    }
    
    //Check if new stat_name conflicts with existing (if changing name)
    if (isset($input['stat_name'])) {
        $checkSql = "SELECT id FROM statistics WHERE stat_name = '" . $conn->real_escape_string($input['stat_name']) . "' AND id != $id";
        $checkResult = $conn->query($checkSql);
        if ($checkResult && $checkResult->num_rows > 0) {
            echo json_encode(["success" => false, "message" => "Statistic with this name already exists"]);
            return;
        }
    }
    
    $sql = "UPDATE statistics SET " . implode(", ", $updates) . " WHERE id = $id";
    
    if ($conn->query($sql)) {
        if ($conn->affected_rows > 0) {
            echo json_encode(["success" => true, "message" => "Statistic updated successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "No changes made"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update statistic: " . $conn->error]);
    }
}

//DELETE statistic
function handleDelete() {
    global $conn;
    
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input || !isset($input['id'])) {
        echo json_encode(["success" => false, "message" => "Missing statistic ID"]);
        return;
    }
    
    $id = intval($input['id']);
    
    //Soft delete
    $sql = "UPDATE statistics SET is_active = FALSE WHERE id = $id";
    
    if ($conn->query($sql)) {
        if ($conn->affected_rows > 0) {
            echo json_encode(["success" => true, "message" => "Statistic deactivated successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "No statistic found with that ID"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to deactivate statistic: " . $conn->error]);
    }
}

$conn->close();
?>