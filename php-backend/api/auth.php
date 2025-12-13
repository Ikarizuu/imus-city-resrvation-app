<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

require_once "../config.php";

$input = json_decode(file_get_contents("php://input"), true);

if (!$input || !isset($input["employeeid"]) || !isset($input["password"])) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

$employeeid = $conn->real_escape_string($input["employeeid"]);
$password = $conn->real_escape_string($input["password"]);

// Check if employee exists
$sql = "SELECT employeeid, first_name, last_name, isAdmin FROM employees 
        WHERE employeeid = '$employeeid' AND password = '$password'";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $employee = $result->fetch_assoc();
    echo json_encode([
        "success" => true, 
        "message" => "Login successful",
        "employeeid" => $employee['employeeid'],
        "firstName" => $employee['first_name'],
        "lastName" => $employee['last_name'],
        "isAdmin" => $employee['isAdmin'] ? $employee['isAdmin'] : 'notAdmin'
    ]);
} else {
    echo json_encode([
        "success" => false, 
        "message" => "Invalid Employee ID or Password"
    ]);
}

$conn->close();
?>