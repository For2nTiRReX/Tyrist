<?php
function clean($value) {
$value = trim($value);
$value = stripslashes($value);
$value = strip_tags($value);
$value = htmlspecialchars($value);
$value = mysql_escape_string($value);
return $value;
}
?>