$(document).ready(function () {
  // lazy loading for Images

  $(function () {
    $("img").unveil(200, function () {
      $(this).animate(
        {
          opacity: 1,
        },
        800
      );
    });
  });

  // scroll Top With Button

  $(window).on("scroll", function () {
    var sc = $(window).scrollTop(),
      top = $(".scroll-top");
    if (sc >= 500) {
      top.fadeIn();
    } else {
      top.fadeOut();
    }
    top.on("click", function () {
      $(window).scrollTop(0);
    });
  });

  // Auto Adjust Header Height
  var myHeader = $(".header");

  myHeader.height($(window).height());

  $(window).resize(function () {
    myHeader.height($(window).height());

    // Adjust Slider List Item Center    |
    $(".slider").each(function () {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".slider li").height()) / 2
      );
    });

    // Auto Change .read-more  position To Center  |

    $(".read-more").width(function () {
      $(this).css(
        "marginLeft",
        ($(window).width() - $(".read-more").width()) / 2.05
      );
    });
  });

  //Links Add Active Class

  $(".links li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  // Adjust Slider List Item Center   ||

  $(".slider").each(function () {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".slider li").height()) / 2
    );
  });

  // Auto Change .read-more  position To Center |

  $(".read-more").width(function () {
    $(this).css(
      "marginLeft",
      ($(window).width() - $(".read-more").width()) / 2.05
    );
  });

  // Trigger The Slider Class

  $(".slider").bxSlider({
    pager: false,
  });

  // Smooth Scroll To Div

  $(".links li a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      },
      1000
    );
  });

  // Auto client-slider Code

  (function autoSlider() {
    $(".client-slider .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            autoSlider();
          });
      } else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");
            $(".client-slider div").eq(0).addClass("active").fadeIn();
            autoSlider();
          });
      }
    });
  })();
 
  // Trigger MixItUp (Suffle)
  $("#container").mixItUp();

  // Adjust Suffle Links
  $(".suffle li").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  // Trigger Nice Scroll
  $("html").niceScroll({
    cursorcolor: "#279d86",
    cursorwidth: "10px",
    cursorborderradius: "1px",
    cursorborder: "1px solid #279d86",
    mousescrollstep: 50,
  });
});
