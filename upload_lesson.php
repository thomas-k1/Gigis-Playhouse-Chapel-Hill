<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $target_dir = "uploads/lessons/";
    $target_file = $target_dir . basename($_FILES["pdfFile"]["name"]);
    $uploadOk = 1;
    $fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    // Check if file is a PDF
    if($fileType != "pdf") {
        echo "Sorry, only PDF files are allowed.";
        $uploadOk = 0;
    }

    // Upload the file
    if ($uploadOk == 1) {
        if (move_uploaded_file($_FILES["pdfFile"]["tmp_name"], $target_file)) {
            echo "The file ". basename( $_FILES["pdfFile"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
}
?>