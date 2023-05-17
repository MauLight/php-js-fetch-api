<?php
include("./php/connect.php");

$q = "select * from regionestb";
$query = mysqli_query($con, $q);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>formulario votación Desis</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" />
    <link rel="stylesheet" href="./styles/styles.css" />
    <script src="./jquery/jquery-3.7.0.js"></script>
    <script type="module" src="app.js"></script>
</head>

<body>
    <header>
        <!-- place navbar here -->
    </header>
    <main>
        <div class="container-fluid">
            <div class="card mx-auto p-5 border-3" style="width: 38rem">
                <div class="card-body px-5 text-center">
                    <h1 class="mb-5">Formulario de votación.</h1>
                    <div id="vote"></div>
                    <form id="form">
                        <input id="name" type="text" placeholder="Username" class="form-control mb-2" name="username" required />
                        <small id="nombrefeedback" for="name" class="d-none invalid-feedback mb-2"></small>
                        <input id="alias" type="text" placeholder="Alias" class="form-control mb-2" name="alias" required />
                        <small id="aliasfeedback" for="alias" class="d-none invalid-feedback mb-2"></small>
                        <input id="rut" type="text" placeholder="Rut" class="form-control mb-2" name="rut" required />
                        <small id="rutfeedback" for="rut" class="d-none invalid-feedback mb-2"></small>
                        <input id="email" type="email" placeholder="Email" class="form-control mb-2" name="email" required />
                        <small id="emailfeedback" for="email" class="d-none invalid-feedback mb-2"></small>

                        <div class="form-floating">
                            <select class="form-select" id="select_region" aria-label="select">
                                <option selected>Selecciona región</option>
                                <?php
                                while ($table_data = mysqli_fetch_array($query)) {
                                    ?>
                                    <option name=<?php echo $table_data['Region_name']; ?> value=<?php echo $table_data['Id']; ?>>
                                    <?php echo $table_data['Region_name']; ?>
                                </option>
                                <?php
                                }
                                ?>
                            </select>
                            <small id="regionfeedback" for="select_region" class="d-none invalid-feedback mb-2"></small>
                        </div>
                        <div class="form-floating mt-2">
                            <select id="select_comuna" class="form-select" aria-label="select">
                                <option selected>Selecciona comuna</option>
                            </select>
                            <small id="comunafeedback" for="select_comuna" class="d-none invalid-feedback mb-2"></small>
                        </div>
                        <div class="form-floating mt-2">
                            <select id="select_candidato" class="form-select" id="select_candidato" aria-label="select">
                                <option selected>Selecciona candidato</option>
                                <?php
                                $candidatos_q = "select * from candidatostb";
                                $candidatos_query = mysqli_query($con, $candidatos_q);
                                while ($table_data = mysqli_fetch_array($candidatos_query)) {
                                ?>
                                    <option value=<?php echo $table_data['Candidate_name']; ?>>
                                        <?php echo $table_data['Candidate_name']; ?>
                                    </option>
                                    <?php
                                }
                                ?>
                            </select>
                            <small id="candidatofeedback" for="select_candidato" class="d-none invalid-feedback mb-2"></small>
                        </div>
                        <h6 class="mt-2">Cómo se enteró de nosotros?</h6>
                        <h6 id="radio" class="mt-2 d-none alert">Elija al menos 2 opciones</h6>
                        <div class="d-flex my-2 gap-3 justify-content-center">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="web" id="web" value="web">
                                <label class="form-check-label" for="web">
                                    web
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="TV" id="TV" value="TV">
                                <label class="form-check-label" for="TV">
                                    TV
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="redes" id="redes" value="redes">
                                <label class="form-check-label" for="redes">
                                    Redes sociales
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="amigo" id="amigo" value="amigo">
                                <label class="form-check-label" for="amigo">
                                    Amigo
                                </label>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center">
                            <button id="btn" type="submit" class="submit-btn btn border border-2 px-5 py-2 mt-3 mx-auto">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <!-- place footer here -->
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
</body>

</html>