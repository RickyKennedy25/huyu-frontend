$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/hello-mahasiswa",
    success: function(response) {
      $("#name").text(response);
    },
    statusCode: {
      401: function() {
        window.location = "index.html";
      },
      403: function() {
        window.location = "dosen.html";
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