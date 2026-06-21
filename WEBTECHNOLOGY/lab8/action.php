<?php
$conn = new mysqli("localhost", "root", "", "lab_db");
if ($conn->connect_error) { die("Database engine connection failed: " . $conn->connect_error); }

// Capture URL variables safely
$action = isset($_GET['action']) ? $_GET['action'] : '';
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($id > 0) {
    // 1. Process Database Deletion Action Routines
    if ($action === 'delete') {
        $sql = "DELETE FROM registrations WHERE id = $id";
        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('Record dropped successfully!'); window.location.href='manage_users.php';</script>";
        }
        
    // 2. Process Database Edit Modification Action Routines
    } elseif ($action === 'edit' && isset($_GET['address'])) {
        $updatedAddress = $conn->real_escape_string(trim($_GET['address']));
        
        $sql = "UPDATE registrations SET address = '$updatedAddress' WHERE id = $id";
        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('Address updated successfully!'); window.location.href='manage_users.php';</script>";
        }
    }
} else {
    // Fallback error handler router redirect engine
    header("Location: manage_users.php");
    exit();
}

$conn->close();
?>
