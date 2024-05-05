<title>Grade</title>
<?php
    $id = $_GET["id"];
    $cc = $_GET["cc"];
    echo "<p>grading a student with iD =$id int the course $cc</p>";
    ?>
<form method="post">
    Mark: <input name="grade" type="number">
    <input type="submit" value="Grade"> &nbsp;&nbsp;
    <a href="index.php">Cancel</a>
</form>
<?php
require 'connection.php';
if(isset($_POST["grade"])){
    $sql = "UPDATE Student_Course SET Mark =:m WHERE StudentID=:sid AND CourseCode=:cc ";
    $statement = $connect->prepare($sql);
    $statement->execute([
        ":m" => $_POST['grade'],
        ":sid" => $_GET['id'],
        ":cc" => $_GET['cc']
    ]);
    session_start();
    $_SESSION["GradeAdded"] = true;
    header("Location:index.php");
}
?>


    
