<?php
$user_vote = $_POST['json'];
if ($user_vote != "") {
    echo "info transferred";
    print_r($user_vote);
} else
    echo "nothing";
?>

<div id="returned">
    <h1>
        <?php
        echo "$user[inputName]";
        ?>
    </h1>
</div>