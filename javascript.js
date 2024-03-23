
  document.addEventListener('DOMContentLoaded', function () {
      var carouselLeftElement = document.querySelector('#carouselLeft');
      var carouselRightElement = document.querySelector('#carouselRight');
  
      var carouselLeft = new bootstrap.Carousel(carouselLeftElement, {
          interval: false,
          wrap: true
      });
      var carouselRight = new bootstrap.Carousel(carouselRightElement, {
          interval: false,
          wrap: true
      });
  
      function advanceCarousels() {
          carouselLeft.next(); 
          carouselRight.next(); 
      }
  
      setInterval(advanceCarousels, 6000);
      
      // Popover 
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl)
      })
  });
  document.querySelectorAll('.popover-trigger').forEach(function (popoverTriggerEl) {
  new bootstrap.Popover(popoverTriggerEl);
  popoverTriggerEl.addEventListener('shown.bs.popover', function () {
    var popoverId = popoverTriggerEl.getAttribute('aria-describedby');
    var popoverEl = document.getElementById(popoverId);
    if (popoverTriggerEl.classList.contains('popover-purple')) {
      popoverEl.style.backgroundColor = 'purple';
    }
  });
});

