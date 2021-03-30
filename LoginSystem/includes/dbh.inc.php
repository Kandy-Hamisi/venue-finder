<?php

$serverName = "localhost";
$dBUsername = "wiz";
$dBPassword = "kameoDB";
$dBName = "phpproject01";

$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

if (!$conn) {
  die ("Connectin failed: ". mysqli_connect_error());
}
?>
