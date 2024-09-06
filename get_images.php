<?php
header('Content-Type: application/json');

$imageDirectory = 'uploads/images/';
$allowedExtensions = ['jpg', 'jpeg', 'png'];

$imageFiles = [];

foreach ($allowedExtensions as $ext) {
    $imageFiles = array_merge($imageFiles, glob($imageDirectory . '*.' . $ext));
}

$fileList = array_map(function($file) {
    return basename($file);
}, $imageFiles);

echo json_encode($fileList);
?>