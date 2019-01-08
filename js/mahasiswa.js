$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/hello-mahasiswa",
    success: function(response) {
      $("#name").text(response);
    },
    statusCode: {
      401: function() {
        window.location = "login.html";
      },
      403: function() {
        window.location = "dosen.html";
      }
    }
  });

  $.ajax({
    method: "GET",
    url: "/logout",
    success: function() {
      window.location = "login.html";
    }
  });
});