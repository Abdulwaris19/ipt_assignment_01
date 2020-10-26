// Author: Abdul Mujeeb EP-1850001

/*====================================================
                        NAVIGATION
====================================================*/

// Show/Hide transparent black navigation

$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $("nav").addClass("dark-menu");
    }
    else {
      $("nav").removeClass("dark-menu");
    }
  });
});


// Smooth Scrolling

$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    //get link id
    var section = $(this).attr("href");
    $('html,body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo")

  });
});



$(function () {
  $("#content-box-btn a").click(function (event) {
    event.preventDefault();
    //get link id
    var section = $(this).attr("href");
    $('html,body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo")

  });
});

