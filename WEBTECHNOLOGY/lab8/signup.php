<?php
$message = "";
$message_class = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Establish connection to your database
    $conn = new mysqli("localhost", "root", "", "lab_db");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // 2. Sanitize and capture the user input from Question 3
    $fullname = $conn->real_escape_string(trim($_POST['name']));
    $address  = $conn->real_escape_string(trim($_POST['address']));
    $email    = $conn->real_escape_string(trim($_POST['email']));
    $dob      = $conn->real_escape_string(trim($_POST['dob']));

    // 3. Simple backend validation check
    if (!empty($fullname) && !empty($address) && !empty($email) && !empty($dob)) {
        
        // 4. Insert data using standard SQL query statement
        $sql = "INSERT INTO registrations (fullname, address, email, dob) 
                VALUES ('$fullname', '$address', '$email', '$dob')";

        if ($conn->query($sql) === TRUE) {
            $message = "🎉 Registration saved to database successfully!";
            $message_class = "success";
        } else {
            // Handles cases where the email is already taken due to UNIQUE constraint
            if ($conn->errno == 1062) {
                $message = "❌ Error: This email address is already registered.";
            } else {
                $message = "❌ Error: " . $conn->error;
            }
            $message_class = "error";
        }
    } else {
        $message = "❌ Please fill out all required fields.";
        $message_class = "error";
    }
    
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab 9 | Store User Registration Data</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.5;
            margin: 0;
            background-color: #f4f7f6;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .form-container {
            width: 100%;
            max-width: 400px;
            background: white;
            padding: 30px;
            border-radius: 9px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
            box-sizing: border-box;
        }

        h2 { text-align: center; color: #0056b3; margin-top: 0; margin-bottom: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; font-weight: bold; margin-bottom: 5px; color: #555; }
        
        input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box; 
        }

        button {
            width: 100%;
            background-color: #0056b3;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            font-size: 16px;
            margin-top: 10px;
        }

        button:hover { background-color: #004085; }

        /* Notification Banner Styles */
        .banner {
            padding: 10px;
            border-radius: 4px;
            font-weight: bold;
            margin-bottom: 15px;
            text-align: center;
            font-size: 14px;
        }
        .success { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
    </style>
</head>
<body>

    <div class="form-container">
        <h2>Create Your Account</h2>
        
        <!-- Display alert notification banner based on operation result -->
        <?php if (!empty($message)): ?>
            <div class="banner <?php echo $message_class; ?>"><?php echo $message; ?></div>
        <?php endif; ?>

        <form action="signup.php" method="POST">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Adrian Kandel" required>
            </div>
            
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Harisiddhi, Lalitpur, Nepal" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="kandeladri@gmail.com" required>
            </div>
            
            <div class="form-group">
                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" required>
            </div>
            
            <button type="submit">Submit Registration</button>
        </form> 
    </div>

</body>
</html>
