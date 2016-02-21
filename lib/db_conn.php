<?php
const HOST_NAME = "localhost";
const HOST_LOGIN = "root";
const HOST_PASSWORD = "";
const BASE_NAME = "hotels";
$mysqli = new mysqli(HOST_NAME,HOST_LOGIN,HOST_PASSWORD,BASE_NAME);
if (!$mysqli) die("Невозможно подключиться к MySQL: ".mysqli_error());
?>