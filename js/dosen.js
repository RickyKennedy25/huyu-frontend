$(document).ready(function() {
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
});