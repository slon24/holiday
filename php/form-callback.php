<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <style>
        body {
            background-color: green;
            border: 1px solid red;
        }

        p {
            font-size: 30px;
        }
    </style>
</head>

<body>
    <?php

    // echo ini_get("max_execution_time"); 
    $yourName = htmlspecialchars($_POST['yourName']);
    $yourTel = htmlspecialchars($_POST['yourTel']);
    $yourIP = htmlspecialchars($_POST['ip']);

    $servername = "localhost";
    $username = "Adminka";
    $password = "";
    $dbname = "holiday_time_baza";

    // $servername = "mysql314.1gb.ua";
    // $username = "gbua_z_busd8f13";
    // $password = "3fffa4ze2qwr";
    // $dbname = "gbua_z_busd8f13";
    
    date_default_timezone_set('Europe/Sofia');

    $data = date("Y-m-d");
    $time = date("H:i:s");

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO holiday_time_tabl (id, name, phone, date, time, ip)
    VALUES ('0','$yourName', '$yourTel', '$data', '$time', '$yourIP')";

    if ($conn->query($sql) === TRUE) {
        echo "<p>$yourName</p>";
        echo "<p>  Ваші дані відправлені успішно </p>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
    ?>
    <script>
        setTimeout(() => {
            this.close();
        }, 2000);
    </script>
</body>

</html>