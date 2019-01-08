$(document).ready(function() {
  $("#submitregister").click(function() {
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
        url: "/user",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
          if (response.role === "ROLE_DOSEN") {
            window.location = "dosen.html"
          }
          else if (response.role === "ROLE_MAHASISWA") {
            window.location = "mahasiswa.html"
          }
        }
      });
    }
  });
});