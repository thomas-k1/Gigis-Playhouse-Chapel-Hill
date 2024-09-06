<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $target_dir = "uploads/images/";
    $target_file = $target_dir . basename($_FILES["imageFile"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    
    // Check if file is an actual image
    $check = getimagesize($_FILES["imageFile"]["tmp_name"]);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
    
    // Check file size (optional, set to 5MB here)
    if ($_FILES["imageFile"]["size"] > 5000000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }
    
    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
        echo "Sorry, only JPG, JPEG, and PNG files are allowed.";
        $uploadOk = 0;
    }
    
    // Upload the file
    if ($uploadOk == 1) {
        if (move_uploaded_file($_FILES["imageFile"]["tmp_name"], $target_file)) {
            echo "The file ". htmlspecialchars(basename($_FILES["imageFile"]["name"])). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
}
?>