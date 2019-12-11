$(function () {
    "use strict";
    // adjusting height
    var windowHeight    = $(window).height(),
        upperBar        = $(".upper-bar").innerHeight(),
        navbar          =$(".navbar").innerHeight();
    $(".slider, .carousel-item").height((windowHeight - (upperBar + navbar)));
    // making shuffle
    $(".featured-work ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === ".all") {
            $(".featured-work .image-box .image-item").fadeIn();
        } else {
            $(".featured-work .image-box .image-item").fadeOut();
            $($(this).data("class")).fadeIn();
        }
    });
});
