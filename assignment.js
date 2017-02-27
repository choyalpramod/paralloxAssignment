$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    slideSpeed : 200,
    autoPlay : false,
    pagination : true,
    itemsDesktop: [1199,1],
    itemsDesktopSmall: [979,1],
    itemsTablet: [768,1],
    itemsMobile: [479,1]
  });

  $('#mobileMenuIcon').click(function(){
    $('#mobileMenu').fadeToggle();
  });

  $(window).resize(function(){
    $('#mobileMenu').hide();
  });
});
