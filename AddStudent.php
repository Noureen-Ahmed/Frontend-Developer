<?php
require 'connection.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Student</title>
    <style>

        body{
            text-transform: capitalize;
        }
    </style>
</head>
<body>
        <form action="" method="post">
            Register A New Student <br>
            first name : <input type="text" name="FName" required>
            last name : <input type="text" name="LName" required>
            email : <input type="email" name="email" >
            courses :<br>
            <select name="courses[]" multiple required>
                <?php
                $sql = "SELECT CourseCode from Course;";
                $statement = $connect->query($sql);
                $courses = $statement->fetchAll(PDO::FETCH_ASSOC);
                foreach ($courses as $course) {
                    echo "<option value ='".$course["CourseCode"]."'>".$course["CourseCode"]."</option>";
                    $x = $course["CourseCode"];
                    echo "<option value = '$x'>$x</option>";

                }
                ?>
            </select><br>
            <input type="submit" value="Register">
            <a href="">Cancel</a>
        </form>
</body>
</html>
<?php
if(isset($_POST['LName'])){
    $sql = "INSERT INTO Student (FName,LName,Email) VALUES(:f,:l,:e)";
    $statement = $connect->prepare($sql);
    $statement->execute([
        ":f" => $_POST['FName'],
        ":l" => $_POST['LName'],
        ":e" => $_POST['email']
    ]);
    $id = $connect->lastInsertId();
    $sql = "INSERT INTO Student_Course(StudentID,CourseCode)VALUES (:sid,:cc)";
    $statement = $connect->prepare($sql);
    foreach($_POST["courses"]as $course){
        $statement->execute([
            ':sid' => $id,
            ':cc' => $course
        ]);
    }
    session_start();
    $_SESSION["InsertStudent"] = true;
    header("Location:index.php");
}
?>