var mainNav = $(".main-nav");

$(window).scroll(function() {
  if( $(this).scrollTop() > 200 ) {
    mainNav.addClass("main-nav-scrolled");
  } else {
    mainNav.removeClass("main-nav-scrolled")
  }
});
