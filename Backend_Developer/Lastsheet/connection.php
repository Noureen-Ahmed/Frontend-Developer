<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>connection</title>
</head>
<body>
<?php
    $hostname='localhost';
    $dbname='university';
    $username = 'root';
    $password = '';
        try {
        $connect = new PDO("mysql:host=$hostname;dbname=$dbname",$username,$password,[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
            echo "the database $dbname is connected successfully";
        }
        catch(PDOException $e){
            echo "Error Connecting to the database $dbname " . $e;
            die();
        }
?>
</body>
</html>
