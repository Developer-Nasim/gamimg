(function($) {
  "use strict";
 
 
  // owlCarousel
  $(".for-owl").owlCarousel({
    loop: true, 
    items: 3,  
    dots: true,
    mouseDrag:false,
    touchDrag:false,
    responsive: {
      0: {
        items: 1,
        mouseDrag:true,
        touchDrag:true,
        stagePadding: 50,
        margin:20,
        autoplay:false
      },
      767: {
        items: 3,
        margin:15
      },
      992: {
        items: 3
      }
    }
  });
  $(".gms-img").owlCarousel({
    loop: true, 
    items: 3,  
    margin:20,
    dots: true,
    mouseDrag:false,
    touchDrag:false,
    responsive: {
      0: {
        items: 1,
        mouseDrag:true,
        touchDrag:true,
        stagePadding: 50,
        autoplay:false
      },
      767: {
        items: 3,
        margin:15
      },
      992: {
        items: 3
      }
    }
  });

 
})(jQuery);
