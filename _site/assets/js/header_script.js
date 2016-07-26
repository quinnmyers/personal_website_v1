//need to try and add some slide down functionality later
//slideToggle does work sorta but it's very bugyy
$(document).ready(function () {
  $("#mobile-button").on('click', function() {
    $(".mobile-nav").toggleClass("is-open");
  });
});
