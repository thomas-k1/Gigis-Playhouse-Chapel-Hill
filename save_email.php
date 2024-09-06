<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $file = 'emails.csv';
        $current = file_get_contents($file);
        $current .= $email . "\n";
        file_put_contents($file, $current);
        echo json_encode(["message" => "Thank you for subscribing!"]);
    } else {
        echo json_encode(["message" => "Invalid email address."]);
    }
}
?>