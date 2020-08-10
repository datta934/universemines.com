$(document).ready(function () {
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Apple1": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
  });

  $("#myInput").change(function () {
    if (this.checked) {
      $("main").css("overflow", "hidden");
    } else {
      $("main").css("overflow", "");
    }
  });
});

(function ($) {
  $(function () {
    $('.slider').slider({
      indicators: false
    });
    $('.sidenav').sidenav();


  }); // end of document ready
})(jQuery); // end of jQuery name space



