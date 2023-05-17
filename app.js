
$(() => {

  $('#select_region').on("change", () => {
    let data = $('#select_region').find(":selected").val();

    $.ajax({
      type: "POST",
      dataType: "html",
      url: "region.php",
      data: {
        json: data,
      },
      success: (data) => {
        $("#select_comuna").html(data);
      },
    })
      .done(() => {
        console.log("Data posted!");
      })
      .fail(() => {
        console.log("Failed to post data.");
      })
      .always(() => {
        console.log("Request is complete.");
      });
  });
});

$("#btn").on("click", (e) => {
  e.preventDefault();

  let data = {};

  data.inputName = $("#name").val();
  data.inputAlias = $("#alias").val();
  data.inputRut = $("#rut").val();
  data.inputEmail = $("#email").val();
  data.inputRegion = $("#select_region").find(":selected").text().trim();
  data.inputComuna = $("#select_comuna").find(":selected").text().trim();
  data.inputCandidato = $("#select_candidato").find(":selected").text().trim();

  let checkboxes = [];
  $('input[type="checkbox"]:checked').each(function () {
    checkboxes.push(this.value);
  });

  data.inputEntero = checkboxes.toString();
  console.log(data.inputEntero);

  let aliasRegex = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]{4,29}$/;
  let rutRegex = /^([1-9]|[1-9]\d|[1-9]\d{2})((\.\d{3})*|(\d{3})*)\-(\d|k|K)$/;
  let emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  let errors = {};

  if (!data.inputName) {
    $("#name").addClass("is-invalid");
    $("#nombrefeedback").removeClass("d-none");
    errors["nombre"] = "Ingresa un nombre.";
  } else {
    $("#name").removeClass("is-invalid");
    $("#name").addClass("is-valid");
    $("#nombrefeedback").addClass("d-none");
  }

  if (!aliasRegex.test(data.inputAlias)) {
    $("#alias").addClass("is-invalid");
    $("#aliasfeedback").removeClass("d-none");
    errors["alias"] = "Alias debe tener al menos cinco caracteres, incluído un número.";
  } else {
    $("#alias").removeClass("is-invalid");
    $("#alias").addClass("is-valid");
    $("#aliasfeedback").addClass("d-none");
  }

  if (!rutRegex.test(data.inputRut)) {
    $("#rut").addClass("is-invalid");
    $("#rutfeedback").removeClass("d-none");
    errors["rut"] = "Formato de RUT incorrecto.";
  } else {
    $("#rut").removeClass("is-invalid");
    $("#rut").addClass("is-valid");
    $("#rutfeedback").addClass("d-none");
  }

  if (!emailRegex.test(data.inputEmail)) {
    $("#email").addClass("is-invalid");
    $("#emailfeedback").removeClass("d-none");
    errors["email"] = "Formato de e-mail incorrecto.";
  } else {
    $("#email").removeClass("is-invalid");
    $("#email").addClass("is-valid");
    $("#emailfeedback").addClass("d-none");
  }

  if (!data.inputRegion || data.inputRegion === "Selecciona región") {
    $("#select_region").addClass("is-invalid");
    $("#regionfeedback").removeClass("d-none");
    errors["region"] = "Selecciona una región.";
  } else {
    $("#select_region").removeClass("is-invalid");
    $("#select_region").addClass("is-valid");
    $("#regionfeedback").addClass("d-none");
  }

  if (!data.inputComuna || data.inputComuna === "Selecciona comuna") {
    $("#select_comuna").addClass("is-invalid");
    $("#comunafeedback").removeClass("d-none");
    errors["comuna"] = "Selecciona una comuna.";
  } else {
    $("#select_comuna").removeClass("is-invalid");
    $("#select_comuna").addClass("is-valid");
    $("#comunafeedback").addClass("d-none");
  }

  if (!data.inputCandidato || data.inputCandidato === "Selecciona candidato") {
    $("#select_candidato").addClass("is-invalid");
    $("#candidatofeedback").removeClass("d-none");
    errors["candidato"] = "Selecciona un candidato.";
  } else {
    $("#select_candidato").removeClass("is-invalid");
    $("#select_candidato").addClass("is-valid");
    $("#candidatofeedback").addClass("d-none");
  }
    if (!checkboxes || checkboxes.length < 2) {
      $("#radio").removeClass("d-none");
      $("#radio").addClass("alert-danger");
    } else {
      $("#radio").removeClass("alert-danger");
      $("#radio").addClass("d-none");
    }

  if (errors["nombre"]) $("#nombrefeedback").html(errors["nombre"]);
  if (errors["alias"]) $("#aliasfeedback").html(errors["alias"]);
  if (errors["rut"]) $("#rutfeedback").html(errors["rut"]);
  if (errors["email"]) $("#emailfeedback").html(errors["email"]);
  if (errors["region"]) $("#regionfeedback").html(errors["region"]);
  if (errors["comuna"]) $("#comunafeedback").html(errors["comuna"]);
  if (errors["candidato"]) $("#candidatofeedback").html(errors["candidato"]);


  if (data.inputName && aliasRegex.test(data.inputAlias) && rutRegex.test(data.inputRut) && emailRegex.test(data.inputEmail) && data.inputRegion !== "Selecciona región" && data.inputComuna !== "Selecciona comuna" && data.inputCandidato !== "Selecciona candidato" && checkboxes.length > 2) {
    $.ajax({
      type: "POST",
      dataType: "html",
      url: "post.php",
      data: {
        json: data,
      },
      success: (data) => {
        if (data === "success!") {
          window.location = "vote.php";
        }
        else {
          $("#vote").html(data);
        }
      },
    })
      .done(() => {
        console.log("Data posted!");
        console.log(JSON.stringify(data));
      })
      .fail(() => {
        console.log("Failed to post data.");
      })
      .always(() => {
        console.log("Request is complete.");
      });
  }
});
