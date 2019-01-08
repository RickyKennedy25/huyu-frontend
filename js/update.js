$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/user/loggedin",
    success: function(response) {
      $("#delete").click(function(event) {
        event.preventDefault();
        $.ajax({
          method: "DELETE",
          url: "/api/user/" + response.id,
          success: function() {
            $.ajax({
              method: "GET",
              url: "/api/logout",
              success: function() {
                console.log("masuk");
                window.location = "index.html";
              }
            });
          }
        });
      });

      $("#update").click(function(event) {
        event.preventDefault();
        let name = $("#name").val();
        let username = $("#username").val();
        let password = $("#password").val();
        let confirm_password = $("#password-confirm").val();
        let role = $('input[type=radio]:checked', '.register-form').val();

        console.log(name + " " + username + " " + password + " " + confirm_password + " " + role);

        let request = {
          id: response.id,
          name: name,
          username: username,
          password: password,
          role: role
        }

        $.ajax({
          method: "PUT",
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
          }
        });
      });
    },
    statusCode: {
      401: function() {
        window.location = "index.html";
      }
    }
  });
});