$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "/api/hello-dosen",
    success: function() {
      window.location = "dosen.html"
    }
  });

  $.ajax({
    method: "GET",
    url: "/api/hello-mahasiswa",
    success: function() {
      window.location = "mahasiswa.html"
    }
  });

  $("#submitlogin").click(function (event) {
    event.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();
    console.log(username + " " + password);

    if (!username || !password) {
      alert("All field must be filled!");
    }
    else {
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
        },
        statusCode: {
          401: () => {
            alert("The username or password you entered is incorrect");
          }
        }
      });
    }
  });
});