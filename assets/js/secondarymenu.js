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
            if(!element.hasClass("btn-group")) {
                padding += parseInt($("#main_nav .active a").css("padding-left"));
            }
            element.offset({"left": padding});
        }
        else {
            element.css("left","");
        }
    });
})