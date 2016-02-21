<?php
require_once "../lib/db_conn.php";
if (isset($_GET['countryS'])) $country = $_GET['countryS'];
if (isset($_GET['typeS'])) $type = $_GET['typeS'];
if (isset($_GET['komfS'])) $komf = $_GET['komfS'];
if (isset($_GET['in1'])) $price1 = $_GET['in1'];
if (isset($_GET['in2'])) $price2 = $_GET['in2'];
if (isset($_GET['Поиск'])){
    if ($price1 == ""){
        $price1 = "0";
    }
    if ($price2 == ""){
        $price2 = "1000000";
    }  
    $query = "      SELECT * FROM hotels 
                    WHERE country LIKE '%$country%' 
                    AND type LIKE '%$type%' 
                    AND comfort LIKE '%$komf%'
                    AND price BETWEEN '$price1' AND '$price2' LIMIT 6";
}
else {
    $query = "SELECT * FROM hotels LIMIT 6";
}
$result = $mysqli->query($query);
if (!$result) die("Ошибка при выполнении запроса в MySQL: ".mysqli_error());
$mysqli->close();
?>