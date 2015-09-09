$(function(){
    var menu = $(".secondary-menu").hide();
    $(window).load(function(){
        $(window).resize();
        menu.slideDown("fast");
    });
    var element = $(".secondary-menu > :first-child");
    var padding;
    $(window).resize(function(){
        if($(window).width() > 767) {
            padding = $("#main_nav .active").position().left;
            // Al form va aggiunto ulteriore padding per allinearlo alla voce
            // di menu corrispondente
            // if(element.hasClass("form-inline")) {
            //     padding += parseInt($("#main_nav .active a").css("padding-left"));
            // }
            menu.css("text-align", "left");
            element.offset({"left": padding});
        }
        else {
            menu.css("text-align", "center");
            element.css("left","");
        }
    });
})