function init() {
  window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 300,
          header = document.querySelector("header");
      if (distanceY > shrinkOn) {
          $(header).addClass("smaller")
      } else {
          if ($('header').hasClass("smaller")) {
              $('header').removeClass("smaller")
          }
      }
  });
}
window.onload = init();

// $(document).ready(function() {
// addLinkDecoration();
// });

// function addLinkDecoration() {
//   $("#navigation a").on('click', function() {
//     $(".current-page").removeClass("current-page");
//     var pathName = window.location.hash;
//     // console.log("path name " + pathName)
//
//     var selector = 'a[href$="' + pathName + '"]';
//     console.log("selector " + selector)
//     //
//     $(selector).addClass("current-page");
//   })
// }

// Make the top nav sticky
// var mainNav = $(".main-nav");
//
// $(window).scroll(function() {
//   if( $(this).scrollTop() > 200 ) {
//     mainNav.addClass("main-nav-scrolled");
//   } else {
//     mainNav.removeClass("main-nav-scrolled")
//   }
// });
