$(document).ready(function(){
    $('.carousel').carousel();
    $(".dropdown-trigger").dropdown();
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    });

    setInterval(function() {
      instances[0].next();
    }, 5000);
  });      