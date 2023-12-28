$(window).scroll(function () {
  /* -------------------
        Header Animation
        ---------------------*/
  if ($(this).scrollTop() > 50) {
    $(".before-color").addClass("after-color");
    $(".logo").addClass("after-color");
  } else {
    $(".before-color").removeClass("after-color");
    $(".logo").removeClass("after-color");
  }
});

//full width revolution
var revapi;

jQuery(document).ready(function () {
  revapi = jQuery(".tp-banner").revolution({
    delay: 6000,
    startwidth: 1170,
    startheight: 450,
    hideThumbs: 10,
    fullScreen: "on",
    forceFullWidth: "on",
    navigationStyle: "preview4",
  });
}); //ready

$(window).load(function () {
  $(".testislider").flexslider({
    direction: "horizantol",
    animation: "slide",
    smoothHeight: true,
    controlNav: false,
  });
});

/**smooth scroll on anchor tag****/
// $(function () {
//   $(".scroll-to a[href*=#]:not([href=#])").click(function () {
//     if (
//       location.pathname.replace(/^\//, "") ==
//         this.pathname.replace(/^\//, "") &&
//       location.hostname == this.hostname
//     ) {
//       var target = $(this.hash);
//       target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
//       if (target.length) {
//         $("html,body").animate(
//           {
//             scrollTop: target.offset().top,
//           },
//           1000
//         );
//         return false;
//       }
//     }
//   });
//   });

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

/* -------------------
 Parallax Sections
 ---------------------*/
if (!Modernizr.touch) {
  $(".parallax-1").parallax("50%", 0.5);
  $(".parallax-2").parallax("50%", 0.5);
  $(".parallax-3").parallax("50%", 0.5);
}
/*----------------
 Auto Close Navbar
 -----------------*/
function close_toggle() {
  if ($(window).width() <= 992) {
    $(".navbar-collapse a").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  } else {
    $(".navbar .navbar-default a").off("click");
  }
}
close_toggle();
$(window).resize(close_toggle);
$(".navbar-collapse").css({
  maxHeight: $(window).height() - $(".navbar-header").height() + "px",
});
$(function () {
  $(".navbar-toggle").bind("click", function (event) {
    var $anchor = $(".navbar-header");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor).offset().top - 0,
        },
        800,
        "swing"
      );
    event.preventDefault();
  });
});

/**prettyPhoto**/
$(window).load(function () {
  "use strict";
  $("a[data-gal^='prettyPhoto']").prettyPhoto();
});
