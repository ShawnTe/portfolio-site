$(document).ready(function() {
  // Assign target section link decoration


// addLinkDecoration();

});

function addLinkDecoration() {
  $("#navigation a").on('click', function() {
    $(".current-page").removeClass("current-page");
    var pathName = window.location.hash;
    // console.log("path name " + pathName)

    var selector = 'a[href$="' + pathName + '"]';
    console.log("selector " + selector)
    //
    $(selector).addClass("current-page");
  })
}

// Make the top nav sticky
var mainNav = $(".main-nav");

$(window).scroll(function() {
  if( $(this).scrollTop() > 200 ) {
    mainNav.addClass("main-nav-scrolled");
  } else {
    mainNav.removeClass("main-nav-scrolled")
  }
});
