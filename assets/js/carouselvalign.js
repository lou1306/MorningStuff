/* Centra verticalmente le img del carousel */
function setMargin(selector, delay){
  setTimeout(function(){
    var element = $(selector)
    element.css(
      { "top": 0,
      "margin-top": ($("#myCarousel").height() - element.height())/2}
      )}, delay)
}
$(document).ready(function(){
  $("#myCarousel").on("slide.bs.carousel", function(){
    setMargin(".item.next img, .item.prev img", 0)
  })
  /* 
  Aumentiamo il delay per tenere conto di brusche variazioni nelle
  dimensioni del viewport
  */
  $(window).on('resize orientationChanged', function() {
    setMargin(".item.active img", 250)
  })
  setMargin(".item.active img", 0)
})