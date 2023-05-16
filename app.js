
$(() => {

  $('#select').on("change", () => {
    let data = $('#select').find(":selected").val();
    alert(data);

    $.ajax({
      type: "POST",
      dataType: "html",
      url: "region.php",
      data: {
        json: data,
      },
      success: (data) => {
        $("#results").html(data);
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
  });
});

$("#btn").on("click", (e) => {
  e.preventDefault();

  let data = {};

  data.inputName = $("#name").val();
  data.inputAlias = $("#alias").val();
  data.inputRut = $("#rut").val();
  data.inputEmail = $("#email").val();


  let aliasRegex = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]{4,29}$/;
  let rutRegex = /^([1-9]|[1-9]\d|[1-9]\d{2})((\.\d{3})*|(\d{3})*)\-(\d|k|K)$/;
  let emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!data.inputName && !aliasRegex.test(data.inputAlias) && !rutRegex.test(data.inputRut) && !emailRegex.test(data.inputEmail)) {
    alert(
      "Name cannot be empty, Alias must be at least five characters, Rut must not start with zero and have hyphen before verification digit, Email should have correct format."
    );
  }
  else if (!data.inputName) {
    alert("Name cannot be empty.")
  }
  else if (!aliasRegex.test(data.inputAlias)) {
    alert("Alias must be at least five characters.");
  } else if (!rutRegex.test(data.inputRut)) {
    alert(
      "Rut must not start with zero and have hyphen before verification digit."
    );
  }
  else if (!emailRegex.test(data.inputEmail)) {
    alert(
      "Email should have correct format."
    );
  }
  else {
    $.ajax({
      type: "POST",
      dataType: "html",
      url: "post.php",
      data: {
        json: data,
      },
      success: (data) => {
        $("#vote").html(data);
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
