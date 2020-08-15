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

  $(".view a").on('click', function () {
    $('.products ul').toggleClass('list');
    return false;
  });

  $('.parallax').parallax();


  $(".filter").on("keyup", function () {
    var input = $(this).val().toUpperCase();

    $(".product-card").each(function () {
      if ($(this).data("product").toUpperCase().indexOf(input) < 0) {
        console.log(input);
        $(this).hide();
      } else {
        $(this).show();
      }
    })
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



