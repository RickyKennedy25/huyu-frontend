$(document).ready(function() {
  $("#submitregister").click(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let username = $("#username").val();
    let password = $("#password").val();
    let confirm_password = $("#password-confirm").val();
    let role = $('input[type=radio]:checked', '.register-form').val();

    console.log(name + " " + username + " " + password + " " + confirm_password + " " + role);

    let request = {
      name: name,
      username: username,
      password: password,
      role: role
    }

    if (!name || !username || !password || !role) {
      alert("All field must be filled!");
    }
    else if (password !== confirm_password) {
      alert("Password didn't match!");
    }
    else {
      $.ajax({
        method: "POST",
        url: "/api/user",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
          $.ajax({
            method: "post",
            url: "/api/login",
            data: "username=" + username + "&password=" + password,
            success: (data) => {
              if (data.role === "ROLE_MAHASISWA") {
                window.location = "mahasiswa.html"
              }
              else if (data.role === "ROLE_DOSEN") {
                window.location = "dosen.html"
              }
            }
          });
        },
        statusCode: {
          400: function() {
            alert("username already exist!");
          }
        }
      });
    }
  });
});