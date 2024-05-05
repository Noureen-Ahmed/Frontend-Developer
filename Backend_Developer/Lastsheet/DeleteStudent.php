<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Student</title>
</head>
<body>
    <form  method="post">
    Last Name : <input type="text" name="LName">
    <input type="submit" value="Delete">
    </form>
</body>
</html>
<?php
require 'connection.php';
if(isset($_POST["LName"])){
    $sql = "SELECT StudentID FROM Student WHERE LName =:l ";
    $statement = $connect->prepare($sql);
if($statement->execute([':l' => $_POST["LName"]])){
    $student = $statement->fetchAll(PDO::FETCH_ASSOC);
    if($student){
        $sql = "DELETE FROM Student WHERE LName =:l ";
        $statement = $connect->prepare($sql);
            $statement->execute([':l' => $_POST["LName"]]);
            echo "<p style = 'color:blue'>the student was deleted successfully </p>";

    }
    else {
            echo "<p style = 'color:red'>check the id and last name of this student again </p>";
    }
}
}
?>