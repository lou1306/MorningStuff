$(function(){
    var menu = $(".secondary-menu").css("max-height", 0);
    $(window).load(function(){
        $(window).resize();
        menu.css("max-height", "200px")
    });
    var element = $(".secondary-menu > :first-child");
    var padding, align;
    $(window).resize(function(){
        if($(window).width() > 767){
            padding = $("#main_nav .active").position().left;
            align = "left";
        }
        else {
            padding = 0;
            align = "center";
            menu.css("overflow", "visible");
        }
        element.css("padding-left", padding);
        menu.css("text-align", align)
    });
})