<?php
$conn = new mysqli("localhost", "root", "", "lab_db");
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

// Fetch the 5 rows, sorting youngest first
$result = $conn->query("SELECT id, fullname, address, email, dob FROM registrations ORDER BY dob DESC LIMIT 5");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab 11 | Edit and Delete Records</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f7f6; padding: 40px; margin: 0; }
        .container { max-width: 900px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        h2 { text-align: center; color: #0056b3; margin-top: 0; margin-bottom: 25px; }
        table { width: 100%; border-collapse: collapse; background: #fff; }
        th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
        th { background-color: #0056b3; color: white; }
        tr:nth-child(even) { background-color: #f9f9f9; }
        
        /* Action buttons layout styling rules */
        .btn { padding: 6px 12px; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 13px; display: inline-block; border: none; cursor: pointer; }
        .btn-edit { background-color: #f0ad4e; color: white; margin-right: 5px; }
        .btn-edit:hover { background-color: #ec971f; }
        .btn-delete { background-color: #d9534f; color: white; }
        .btn-delete:hover { background-color: #c9302c; }
    </style>
</head>
<body>

    <div class="container">
        <h2>Manage User Database Records</h2>
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if ($result && $result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . htmlspecialchars($row['fullname']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['address']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['email']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['dob']) . "</td>";
                        echo "<td>
                                <button class='btn btn-edit' onclick='confirmEdit(" . $row['id'] . ", \"" . htmlspecialchars($row['address']) . "\")'>Edit Address</button>
                                <button class='btn btn-delete' onclick='confirmDelete(" . $row['id'] . ")'>Delete</button>
                              </td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='5' style='text-align:center; padding:20px; color:#777;'>No database rows detected.</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </div>

    <!-- JavaScript Confirmation Handlers Block -->
    <script>
        // 1. JavaScript Edit Handler with confirmation prompt
        function confirmEdit(userId, currentAddress) {
            let newAddress = prompt("Update user address parameter:", currentAddress);
            
            // If the user didn't cancel and typed a new address block profile string
            if (newAddress !== null && newAddress.trim() !== "") {
                if (confirm("Are you sure you want to update this user's address?")) {
                    // Redirect path location router engine channel parameters 
                    window.location.href = "action.php?action=edit&id=" + userId + "&address=" + encodeURIComponent(newAddress.trim());
                }
            }
        }

        // 2. JavaScript Delete Handler with confirmation choice modal alert box
        function confirmDelete(userId) {
            if (confirm("🚨 WARNING: Are you sure you want to permanently delete this user profile?")) {
                window.location.href = "action.php?action=delete&id=" + userId;
            }
        }
    </script>

</body>
</html>
<?php $conn->close(); ?>
