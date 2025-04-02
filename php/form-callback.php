<?php

// echo ini_get("max_execution_time"); 
$yourName = htmlspecialchars($_POST['yourName']);
$yourTel = htmlspecialchars($_POST['yourTel']);

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

$sql = "INSERT INTO holiday_time_tabl (id, name, phone, date, time)
VALUES ('0','$yourName', '$yourTel', '$data', '$time')";

if ($conn->query($sql) === TRUE) {
  echo $yourName;
  echo " Ваші дані відправлені успішно";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>