$(document).ready(function(){
    $(".arrow").click(function(){
        $(".dropdown-content").slideToggle();
        $(".arrow").toggleClass("fa-chevron-down fa-chevron-up");
    });
    $(".arrow2").click(function(){
        $(".dropdown-content2").slideToggle();
        $(".arrow2").toggleClass("fa-chevron-down fa-chevron-up");
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
});

