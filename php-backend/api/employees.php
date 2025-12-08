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
        handleGetEmployees();
        break;
    case 'POST':
        handleCreateEmployee();
        break;
    case 'PUT':
        handleUpdateEmployee();
        break;
    case 'DELETE':
        handleDeleteEmployee();
        break;
    default:
        echo json_encode(["success" => false, "message" => "Method not allowed"]);
}

function handleGetEmployees() {
    global $conn;
    
    $sql = "SELECT id, employeeid, first_name, last_name, created_at FROM employees ORDER BY last_name, first_name";
    $result = $conn->query($sql);
    $employees = [];
    
    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $employees[] = $row;
        }
    }
    
    echo json_encode($employees);
}

function handleCreateEmployee() {
    global $conn;
    
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input || !isset($input["employeeid"]) || !isset($input["password"]) || 
        !isset($input["first_name"]) || !isset($input["last_name"])) {
        echo json_encode(["success" => false, "message" => "Missing required fields"]);
        return;
    }
    
    $employeeid = $conn->real_escape_string($input['employeeid']);
    $password = $conn->real_escape_string($input['password']);
    $firstName = $conn->real_escape_string($input['first_name']);
    $lastName = $conn->real_escape_string($input['last_name']);
    
    // Check if employeeid already exists
    $checkSql = "SELECT id FROM employees WHERE employeeid = '$employeeid'";
    $checkResult = $conn->query($checkSql);
    
    if ($checkResult && $checkResult->num_rows > 0) {
        echo json_encode(["success" => false, "message" => "Employee ID already exists"]);
        return;
    }
    
    $sql = "INSERT INTO employees (employeeid, password, first_name, last_name) 
            VALUES ('$employeeid', '$password', '$firstName', '$lastName')";
    
    if ($conn->query($sql)) {
        echo json_encode(["success" => true, "message" => "Employee created successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to create employee: " . $conn->error]);
    }
}

function handleUpdateEmployee() {
    global $conn;
    
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input || !isset($input['id'])) {
        echo json_encode(["success" => false, "message" => "Missing employee ID"]);
        return;
    }
    
    $id = intval($input['id']);
    $updates = [];
    
    if (isset($input['employeeid'])) {
        $updates[] = "employeeid = '" . $conn->real_escape_string($input['employeeid']) . "'";
    }
    if (isset($input['password']) && !empty($input['password'])) {
        $updates[] = "password = '" . $conn->real_escape_string($input['password']) . "'";
    }
    if (isset($input['first_name'])) {
        $updates[] = "first_name = '" . $conn->real_escape_string($input['first_name']) . "'";
    }
    if (isset($input['last_name'])) {
        $updates[] = "last_name = '" . $conn->real_escape_string($input['last_name']) . "'";
    }
    
    if (empty($updates)) {
        echo json_encode(["success" => false, "message" => "No fields to update"]);
        return;
    }
    
    $sql = "UPDATE employees SET " . implode(", ", $updates) . " WHERE id = $id";
    
    if ($conn->query($sql)) {
        echo json_encode(["success" => true, "message" => "Employee updated successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update employee: " . $conn->error]);
    }
}

function handleDeleteEmployee() {
    global $conn;
    
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input || !isset($input['id'])) {
        echo json_encode(["success" => false, "message" => "Missing employee ID"]);
        return;
    }
    
    $id = intval($input['id']);
    $sql = "DELETE FROM employees WHERE id = $id";
    
    if ($conn->query($sql)) {
        if ($conn->affected_rows > 0) {
            echo json_encode(["success" => true, "message" => "Employee deleted successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "No employee found with that ID"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to delete employee: " . $conn->error]);
    }
}

$conn->close();
?>