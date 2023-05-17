<!doctype html>
<html lang="en">

<head>
    <title>Formulario votación 🏝 </title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles/styles.css" />
    <script src="./jquery/jquery-3.7.0.js"></script>
</head>

<body>
    <header>
        <!-- place navbar here -->
    </header>
    <main>
        <div class="container-fluid text-center mt-5">
            <h1>Votantes.</h1>
            <div id="returned" class="d-flex justify-content-center">
                <?php
                include("./php/connect.php");
                $vote = "select * from votertb";
                $vote_query = mysqli_query($con, $vote);
                while ($user_vote = mysqli_fetch_array($vote_query)) {
                ?>

                <?php
                    echo '<div class="card mx-2" style="width: 18rem;">';
                    echo '<div class="card-body">';
                    echo "Nombre: $user_vote[Voter_nombre]";
                    echo '<br>';
                    echo "Alias: $user_vote[Voter_alias]";
                    echo '<br>';
                    echo "RUT: $user_vote[Voter_RUT]";
                    echo '<br>';
                    echo "Email: $user_vote[Voter_email]";
                    echo '<br>';
                    echo "Región: $user_vote[Voter_region]";
                    echo '<br>';
                    echo "Comuna: $user_vote[Voter_comuna]";
                    echo '<br>';
                    echo "Candidato: $user_vote[Voter_candidato]";
                    echo '<br>';
                    echo "Cómo se enteró: $user_vote[Cómo_se_enteró]";
                    echo '<br>';
                    echo '<br>';
                    echo '</div>';
                    echo '</div>';
                }
                ?>
            </div>
        </div>
    </main>
    <footer>
        <!-- place footer here -->
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
    </script>
</body>

</html>