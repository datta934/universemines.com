$(document).ready(function () {
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
        $(this).removeClass("show");
      } else {
        $(this).addClass("show");
      }
    })
  });







  filterSelection("all");
  $(".collection .collection-item").on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active')
  })


});

(function ($) {
  $(function () {
    $('.slider').slider({
      indicators: false
    });
    $('.sidenav').sidenav();


  }); // end of document ready
})(jQuery); // end of jQuery name space



function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter-div");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    filterRemove(x[i], "show");
    if (x[i].className.indexOf(c) > -1) filterAdd(x[i], "show");
  }
}

function filterAdd(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function filterRemove(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

