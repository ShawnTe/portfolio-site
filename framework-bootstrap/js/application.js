$(document).ready(function() {
  init();
  // addLinkDecoration();
});

// Thank you http://callmenick.com/post/animated-resizing-header-on-scroll for this function
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
// window.onload = init();
// function addLinkDecoration() {
//   $("nav a").on('click', function() {
//     if ( $('a').hasClass("current-page") ) {
//       $(".current-page").removeClass("current-page");
//     }
//
//     var pathName = window.location.hash;
//     // console.log("path name " + pathName)
//     var selector = 'a[href$="' + pathName + '"]';
//     console.log("selector " + selector)
//     //
//     $(selector).addClass("current-page");
//   })
// }
