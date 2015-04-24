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
  // In alcuni casi il resize porta ad uno schermo bianco
  // (ci troviamo ad un offset superiore all'altezza del document).
  // Questa funzione riporta l'utente a inizio pagina.
  $(window).resize(function(){
    setTimeout(function(){
      if (($(window).scrollTop() + $(window).height()) > $(document).height()) {
        $(window).scrollTop(0);
      }
    }, 300);
  });
});