<?php
// 1. Establish database connection link
$conn = new mysqli("localhost", "root", "", "lab_db");

if ($conn->connect_error) {
    die("Database Connection failed: " . $conn->connect_error);
}

/* 
   2. SQL query to select records.
   We filter exactly 5 rows and order by DOB descending (Youngest first).
*/
$sql = "SELECT id, fullname, address, email, dob FROM registrations ORDER BY dob DESC LIMIT 5";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 10 | Retrieve Sorted Records</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7f6;
            margin: 0;
            padding: 40px;
        }

        .container {
            max-width: 850px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        h2 {
            text-align: center;
            color: #0056b3;
            margin-top: 0;
            margin-bottom: 25px;
        }

        /* Table structural borders and layout spacing rules */
        table {
            width: 100%;
            border-collapse: collapse;
            background-color: #ffffff;
            margin-bottom: 10px;
        }

        th, td {
            padding: 12px 15px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #0056b3;
            color: white;
            font-weight: bold;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tr:hover {
            background-color: #f1f1f1;
        }

        .no-data {
            text-align: center;
            padding: 20px;
            color: #777;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Registered Users Profiles (Youngest to Oldest)</h2>

        <table>
            <thead>
                <tr>
                    <th>S.N.</th>
                    <th>Full Name</th>
                    <th>Address</th>
                    <th>Email Address</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // 3. Loop through database rows and dump values inside HTML elements
                if ($result && $result->num_rows > 0) {
                    $serial = 1;
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $serial++ . "</td>";
                        echo "<td>" . htmlspecialchars($row['fullname']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['address']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['email']) . "</td>";
                        // Formats the output date display properties natively
                        echo "<td>" . date("F d, Y", strtotime($row['dob'])) . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='5' class='no-data'>No data files found in the database. Please submit your signup form first!</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </div>

</body>
</html>
<?php
// Close database link references cleanly
$conn->close();
?>
