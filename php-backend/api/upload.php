<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

//Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

//Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

//Check if file was uploaded
if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(["success" => false, "message" => "No image uploaded or upload error"]);
    exit();
}

//Get upload type
$type = isset($_POST['type']) ? $_POST['type'] : 'general';

//Set upload directory based on type
switch ($type) {
    case 'news-carousel':
        $uploadDir = '../uploads/news-carousel/';
        break;
    default:
        $uploadDir = '../uploads/general/';
        break;
}

//Create directory if it doesn't exist
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

//Validate file
$file = $_FILES['image'];
$fileName = $file['name'];
$fileTmpName = $file['tmp_name'];
$fileSize = $file['size'];
$fileError = $file['error'];

//Check for upload errors
if ($fileError !== UPLOAD_ERR_OK) {
    $errorMessages = [
        UPLOAD_ERR_INI_SIZE => 'File exceeds upload_max_filesize directive in php.ini',
        UPLOAD_ERR_FORM_SIZE => 'File exceeds MAX_FILE_SIZE directive in HTML form',
        UPLOAD_ERR_PARTIAL => 'File was only partially uploaded',
        UPLOAD_ERR_NO_FILE => 'No file was uploaded',
        UPLOAD_ERR_NO_TMP_DIR => 'Missing a temporary folder',
        UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
        UPLOAD_ERR_EXTENSION => 'A PHP extension stopped the file upload'
    ];
    echo json_encode(["success" => false, "message" => $errorMessages[$fileError] ?? 'Unknown upload error']);
    exit();
}

//Check file size (max 50MB)
$maxSize = 50 * 1024 * 1024;
if ($fileSize > $maxSize) {
    echo json_encode(["success" => false, "message" => "File size exceeds 50MB limit"]);
    exit();
}

//Check file type
$allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
$fileType = mime_content_type($fileTmpName);
if (!in_array($fileType, $allowedTypes)) {
    echo json_encode(["success" => false, "message" => "Invalid file type. Only JPG, PNG, GIF, and WebP are allowed"]);
    exit();
}

//Generate unique filename
$fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
$uniqueName = uniqid('news_', true) . '_' . time() . '.' . $fileExtension;
$uploadPath = $uploadDir . $uniqueName;

//Move uploaded file
if (move_uploaded_file($fileTmpName, $uploadPath)) {
    //Return success response
    echo json_encode([
        "success" => true,
        "message" => "Image uploaded successfully",
        "filePath" => $uniqueName,
        "fullPath" => $uploadPath,
        "originalName" => $fileName,
        "fileSize" => $fileSize,
        "fileType" => $fileType
    ]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to move uploaded file"]);
}
?>