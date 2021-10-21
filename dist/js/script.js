$(document).ready(function(){
    $(".arrow").click(function(){
        $(".dropdown-content").slideToggle();
        $(".arrow").toggleClass("fa-chevron-down fa-chevron-up");
    });
    $(".arrow2").click(function(){
        $(".dropdown-content2").slideToggle();
        $(".arrow2").toggleClass("fa-chevron-down fa-chevron-up");
    });
    $(".arrow3").click(function(){
        $(".dropdown-content3").slideToggle();
        $(".arrow3").toggleClass("fa-chevron-down fa-chevron-up");
    });
    $(".hamb").click(function(){
        $(".menue-items").toggleClass("ham-a");
        $(".hamb").toggleClass("fa-bars fa-times");
    });
    $(".qwraper-1").click(function(){
        $(".ab-p-1").slideToggle();
        $(".ar-1").toggleClass("t-ro");
    });
    $(".qwraper-2").click(function(){
        $(".ab-p-2").slideToggle();
        $(".ar-2").toggleClass("t-ro");
    });
    $(".qwraper-3").click(function(){
        $(".ab-p-3").slideToggle();
        $(".ar-3").toggleClass("t-ro");
    });
    $(".qwraper-4").click(function(){
        $(".ab-p-4").slideToggle();
        $(".ar-4").toggleClass("t-ro");
    });
    $('.owl-carousel').owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        responsive:{
            0:{
                items:1,
            },
            730:{
                items:2,
            },
            1060:{
                items:3,
            }
        }
    });
    $(".qsarr-i").click(function(){
        $(".faq-ans1").slideToggle();
        $(".qsarr-i").toggleClass("fa-chevron-down fa-chevron-up");
    });
    $(".qsarr-i2").click(function(){
        $(".faq-ans2").slideToggle();
        $(".qsarr-i2").toggleClass("fa-chevron-down fa-chevron-up");
    });
    $(".qsarr-i3").click(function(){
        $(".faq-ans3").slideToggle();
        $(".qsarr-i3").toggleClass("fa-chevron-down fa-chevron-up");
    });
    $(".qsarr-i4").click(function(){
        $(".faq-ans4").slideToggle();
        $(".qsarr-i4").toggleClass("fa-chevron-down fa-chevron-up");
    });
});

