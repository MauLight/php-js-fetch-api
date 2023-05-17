<?php
if (isset($_POST['json'])) {

    include("./php/connect.php");
    $user_vote = $_POST['json'];

    $user_name = $user_vote['inputName'];
    $user_alias = $user_vote['inputAlias'];
    $user_rut = $user_vote['inputRut'];
    $user_email = $user_vote['inputEmail'];
    $user_region = $user_vote['inputRegion'];
    $user_comuna = $user_vote['inputComuna'];
    $user_candidato = $user_vote['inputCandidato'];
    $user_entero = $user_vote['inputEntero'];

    $user_q = "insert into votertb(Voter_nombre, Voter_alias, Voter_RUT, Voter_email, Voter_region, Voter_comuna, Voter_candidato, Cómo_se_enteró) values('$user_name', '$user_alias', '$user_rut', '$user_email', '$user_region', '$user_comuna', '$user_candidato', '$user_entero')";

    try {
        mysqli_query($con, $user_q);
        echo "success!";
    } catch (mysqli_sql_exception) {
        //printf("Error - SQLSTATE %s.\n", mysqli_sqlstate($con));
        echo '<div class="alert alert-danger">RUT ha sido ingresado anteriormente.</div>';
    }
}
else {
    echo "No data received";
}
