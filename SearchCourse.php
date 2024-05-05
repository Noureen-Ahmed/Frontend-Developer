<?php require 'connection.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search</title>
</head>
<body>
    <form method="post">
        Courses:
        <select name="courses[]" multiple required min='1'>
<?php
            $sql = "SELECT CourseCode FROM Course";
            $statement = $connect->query($sql);
            $courses = $statement->fetchAll(PDO::FETCH_ASSOC);
            foreach($courses as $course){
                $x = $course["CourseCode"];
                echo "<option value='$x'>$x</option>";
            }
            ?>
            </select>
            <br>
            <input type="submit" value="Search">
        </form>
    <?php
        if(isset($_POST["courses"])) {
            $sql = "SELECT * FROM Student NATURAL JOIN Student_Course WHERE Mark >=80 AND CourseCode IN (";
            // $sql = "SELECT * FROM Course WHERE CourseCode IN (";
            $courses = $_POST["courses"];
            for($i = 1; $i <= count($courses); $i++){
                $sql .= "?";
                if($i != count($courses))
                    $sql .= ",";
            }
            $sql .= ")";
            $statement = $connect->prepare($sql);
            $statement->execute($courses);
            $students = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo "<table border = 1>";
        foreach($students as $student){
            echo"<tr>";
            echo"<td>",$student["StudentID"],"</td>";
            echo"<td>",$student["FName"],"</td>";
            echo"<td>",$student["LName"],"</td>";
            echo"<td>",$student["CourseCode"],"</td>";
            echo"<td>",$student["Mark"],"</td>";
            // echo"<td>",$student["CrHour"],"</td>";
            echo "</tr>";
        }
        echo "</table>";
    }

    ?>
</body>
</html>