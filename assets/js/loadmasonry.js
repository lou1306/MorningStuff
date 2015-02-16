/* Carica il plugin Isotope per la visualizzazione delle immagini */
$(document).ready(function(){
  $masonryContainer = $("#masonry")
  $masonryContainer.imagesLoaded(function(){
    $masonryContainer.isotope({
      getSortData: {
        date: "[data-date]"
      },
      sortBy: "date",
      sortAscending: false,
      itemSelector: '.masonry-element',
      masonry: {
        gutter: 2,
        columnWidth: 280,
        isFitWidth: true
      }
    });
  });
});