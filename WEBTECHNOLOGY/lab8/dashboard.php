<?php
session_start();
if(!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Secure Dashboard</title>
    <style>
        body {
            font-family: sans-serif; 
            padding: 50px; 
            text-align: center; 
            background-color: orange; 
        }
        
        .card { 
            background: white; 
            padding: 40px; 
            max-width: 450px; 
            margin: auto; 
            border-radius: 9px; 
            box-shadow: 0 4px 11px rgba(0,0,0,0.3);
        }
        
        /* FIXED: Added missing closing bracket } */
        h1 { 
            color: black; 
        }
        
        /* FIXED: Replaced bad colons (:) with proper semicolons (;) */
        a {
            display: inline-block; 
            margin-top: 30px; 
            padding: 10px 20px; 
            background-color: violet; 
            color: white; 
            text-decoration: none; 
            border-radius: 4px; 
            font-weight: bold; 
        }
        
        a:hover {
            background-color: darkviolet;
        }
    </style>
</head>
<body>
    <div class="card">
        <!-- FIXED: Corrected spelling to htmlspecialchars -->
        <h1>Welcome back, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>
        <p>Server-Side Authentication Test Passed Successfully.</p>
        <a href="logout.php">Log Out</a>
    </div>
</body>
</html>
