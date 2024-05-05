<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
</head>
<body>
    <?php
    require 'connection.php';
    session_start();
    if (isset($_SESSION["InsertStudent"])){
        echo "<p style ='color:green'>Record Added</p>";
        unset($_SESSION["InsertStudent"]);
    }
    if (isset($_SESSION["GradeAdded"])){
        echo "<p style ='color:green'>Grade Added</p>";
        unset($_SESSION["GradeAdded"]);
    }
    $sql = "SELECT * FROM Student s NATURAL JOIN Student_Course sc;";
    $statement = $connect->query($sql);
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo "<table border=1>";
    foreach($data as $student){
        echo"<tr>";
        echo"<td>".$student["StudentID"],"</td>";
        echo"<td>".$student["FName"],"</td>";
        echo"<td>".$student["LName"],"</td>";
        echo"<td>".$student["CourseCode"],"</td>";
        echo"<td>".$student["Mark"],"</td>";
        echo "<td>";
        $id = urlencode($student["StudentID"]);
        $cc = urlencode($student["CourseCode"]);
        echo "<a href ='grade.php?id=$id&cc=$cc'>Grading</a>";
        echo "</td>";
        echo "</tr>";
    }
    echo "</table>";
    ?>
    <a href="AddStudent.php">Add a student</a>
    <a href="DeleteStudent.php"> Delete a student</a>
    <a href="DeleteStudent.php"> search about course</a>
</body>
</html>