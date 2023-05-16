<?php
include("connect.php");
$communes = "select * from comunastb";
$communes_query = mysqli_query($con, $communes);
$region = $_POST['json'];
if ($region != "") {
    //print_r($region);
    while ($communes_data = mysqli_fetch_array($communes_query)) {
        if ($communes_data['Region_id'] === $region) {
            $commune_name = $communes_data['Commune_name'];
            $id = $communes_data['Commune_name'];
            echo "<option value=$id >$commune_name</option>";
        }
    };
    echo "info transferred";
} else
    echo "nothing";
