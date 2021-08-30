$(document).ready(function(){
    $(".arrow").click(function(){
        $(".dropdown-content").slideToggle();
        $(".arrow").toggleClass("fa-chevron-down fa-chevron-up");
    });
});

$(document).ready(function(){
    $(".hamb").click(function(){
        $(".menue-items").toggleClass("ham-a");
        $(".hamb").toggleClass("fa-bars fa-times");
    });
});