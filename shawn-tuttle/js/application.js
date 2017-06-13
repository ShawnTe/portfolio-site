$(document).ready(function() {
  init();
  contactForm();
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

function contactForm() {

  $('#contact_form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          first_name: {
              validators: {
                      stringLength: {
                      min: 2,
                  },
                      notEmpty: {
                      message: 'Oops! Missing your name'
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'Oops! Missing your email address'
                  },
                  emailAddress: {
                      message: 'Please supply a valid email address'
                  }
              }
          }
      }
    })
      .on('success.form.bv', function(e) {
          $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
              $('#contact_form').data('bootstrapValidator').resetForm();

          // Prevent form submission
          e.preventDefault();

          // Get the form instance
          var $form = $(e.target);

          // Get the BootstrapValidator instance
          var bv = $form.data('bootstrapValidator');

          // Use Ajax to submit form data
          $.post($form.attr('action'), $form.serialize(), function(result) {
              console.log(result);
          }, 'json');
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
