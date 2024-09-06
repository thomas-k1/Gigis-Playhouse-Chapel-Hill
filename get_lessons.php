<?php
header('Content-Type: application/json');

$pdfDirectory = 'uploads/lessons/';
$pdfFiles = glob($pdfDirectory . '*.pdf');

$fileList = array_map(function($file) {
    return basename($file);
}, $pdfFiles);

echo json_encode($fileList);
?>