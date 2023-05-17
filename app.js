
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
  data.inputEntero = $('input[name="radio"]:checked').val();

  let aliasRegex = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]{4,29}$/;
  let rutRegex = /^([1-9]|[1-9]\d|[1-9]\d{2})((\.\d{3})*|(\d{3})*)\-(\d|k|K)$/;
  let emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!data.inputName) {
    $("#name").addClass("is-invalid");
  } else {
    $("#name").removeClass("is-invalid");
    $("#name").addClass("is-valid");
  }

  if (!aliasRegex.test(data.inputAlias)) {
    $("#alias").addClass("is-invalid");
  } else {
    $("#alias").removeClass("is-invalid");
    $("#alias").addClass("is-valid");
  }

  if (!rutRegex.test(data.inputRut)) {
    $("#rut").addClass("is-invalid");
  } else {
    $("#rut").removeClass("is-invalid");
    $("#rut").addClass("is-valid");
  }

  if (!emailRegex.test(data.inputEmail)) {
    $("#email").addClass("is-invalid");
  } else {
    $("#email").removeClass("is-invalid");
    $("#email").addClass("is-valid");
  }

  if (!data.inputRegion || data.inputRegion === "Selecciona región") {
    $("#select_region").addClass("is-invalid");
  } else {
    $("#select_region").removeClass("is-invalid");
    $("#select_region").addClass("is-valid");
  }

  if (!data.inputComuna || data.inputComuna === "Selecciona comuna") {
    $("#select_comuna").addClass("is-invalid");
  } else {
    $("#select_comuna").removeClass("is-invalid");
    $("#select_comuna").addClass("is-valid");
  }

  if (!data.inputCandidato || data.inputCandidato === "Selecciona candidato") {
    $("#select_candidato").addClass("is-invalid");
  } else {
    $("#select_candidato").removeClass("is-invalid");
    $("#select_candidato").addClass("is-valid");
  }

  if (!data.inputEntero) {
    $("#radio").removeClass("d-none");
    $("#radio").addClass("alert-danger");
  } else {
    $("#radio").removeClass("alert-danger");
    $("#radio").addClass("d-none");
  }

  if (data.inputName && aliasRegex.test(data.inputAlias) && rutRegex.test(data.inputRut) && emailRegex.test(data.inputEmail) && data.inputRegion !== "Selecciona región" && data.inputComuna !== "Selecciona comuna" && data.inputCandidato !== "Selecciona candidato" && data.inputEntero) {
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
