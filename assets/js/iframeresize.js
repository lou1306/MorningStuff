$(document).ready(function() {
    /* Ridimensionamento degli iframe */
    $(window).on("resize", function() {
        $("iframe").width($("iframe").parent().width());
    })
    $(window).resize();
});
