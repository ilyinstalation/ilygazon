<?php
$host = "localhost";
$dbname = "monsite";
$username = "root";
$password = "";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Erreur connexion");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $message = htmlspecialchars($_POST['message']);

    // Vérifications
    if (empty($nom) || empty($email) || empty($message)) {
        die("Veuillez remplir les champs obligatoires");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Email invalide");
    }

    $stmt = $conn->prepare("INSERT INTO contacts (nom, email, telephone, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nom, $email, $telephone, $message);

    if ($stmt->execute()) {
        echo "✅ Message enregistré !";
    } else {
        echo "Erreur.";
    }

    $stmt->close();
}

$conn->close();
?>