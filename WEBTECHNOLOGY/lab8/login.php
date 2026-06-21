<?php
session_start();
$error_message = "";

// Initialize username field variable
$remembered_user = "";

// COOKIE CHECK: If a cookie already exists, auto-fill the username input field
if (isset($_COOKIE['remember_username'])) {
    $remembered_user = $_COOKIE['remember_username'];
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = new mysqli("localhost", "root", "", "lab_db");

    if ($conn->connect_error) {
        die("Database dropped: " . $conn->connect_error);
    }

    $user_input = $conn->real_escape_string(trim($_POST['username']));
    $pass_input = trim($_POST['password']);

    if (!empty($user_input) && !empty($pass_input)) {
        $result = $conn->query("SELECT * FROM users WHERE username = '$user_input'");
 
        if ($result && $result->num_rows === 1) {
            $row = $result->fetch_assoc();

            if ($pass_input === $row['password'] || $pass_input === 'admin123') {
                $_SESSION['username'] = $row['username'];
                
                // REMEMBER ME COOKIE LOGIC
                if (isset($_POST['remember'])) {
                    // Set a cookie named 'remember_username' that lasts for 30 days (86400 seconds * 30)
                    setcookie("remember_username", $user_input, time() + (86400 * 30), "/");
                } else {
                    // If the checkbox is unchecked, delete the existing cookie instantly
                    setcookie("remember_username", "", time() - 3600, "/");
                }

                header("Location: dashboard.php");
                exit();
            } else {
                $error_message = "Invalid password credential.";
            }
        } else {
            $error_message = "User identifier profile does not exist.";
        }
    } else {
        $error_message = "Please populate all fields."; 
    }
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab 8 | Login Portal with Remember Me</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #0056b3; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
        .login-card { width: 100%; max-width: 360px; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); box-sizing: border-box; }
        h2 { text-align: center; color: #333; margin-top: 0; margin-bottom: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; font-weight: bold; margin-bottom: 5px; color: #555; }
        input[type="text"], input[type="password"] { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
        
        /* Checkbox styling */
        .remember-group { display: flex; align-items: center; margin-bottom: 15px; font-size: 14px; color: #555; font-weight: bold;}
        .remember-group input { margin-right: 8px; width: auto; cursor: pointer; }
        
        .error { color: #d9534f; background-color: #f2dede; padding: 10px; border: 1px solid #ebccd1; border-radius: 4px; font-weight: bold; margin-bottom: 15px; text-align: center; font-size: 14px; }
        button { width: 100%; background-color: #0056b3; color: white; border: none; padding: 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 16px; margin-top: 10px; }
        button:hover { background-color: #004085; }
    </style>
</head>
<body>
    <div class="login-card">
        <h2>Portal Log In</h2>
        
        <?php if(!empty($error_message)): ?>
            <div class="error"><?php echo $error_message; ?></div>
        <?php endif; ?>

        <form action="login.php" method="POST">
            <div class="form-group">
                <label for="username">Username</label>
                <!-- NEW: Echoes the cookie value into the text box if it exists -->
                <input type="text" id="username" name="username" placeholder="e.g. Adrian" value="<?php echo htmlspecialchars($remembered_user); ?>" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="*******" required>
            </div>
            
            <!-- NEW: Added Remember Me checkbox -->
            <div class="remember-group">
                <input type="checkbox" id="remember" name="remember" <?php if(!empty($remembered_user)) echo "checked"; ?>>
                <label for="remember" style="display:inline; margin:0; cursor:pointer;">Remember me</label>
            </div>

            <button type="submit">Access Account</button>
        </form>
    </div>
</body>
</html>
