$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/user/loggedin",
    success: function(response) {
      $("#name2").text(response.name);
    }
  })
  $.ajax({
    method: "GET",
    url: "/api/hello-dosen",
    success: function(response) {
      $("#name").text(response);
    },
    statusCode: {
      401: function() {
        window.location = "index.html";
      },
      403: function() {
        window.location = "mahasiswa.html";
      }
    }
  });

  $("#logout").click(function() {
    $.ajax({
      method: "GET",
      url: "/api/logout",
      success: function() {
        window.location = "index.html";
      }
    });
  });

  $("#update").click(function() {
    window.location = "update.html";
  });
});