// In this file plugins are initialized and configured to behave as expected

// -------------------------------------------------------------------------



// Loading Custom Fonts via Js from https://www.google.com/fonts

// -------------------------------------------------------------

WebFontConfig = {

    google: { families: [ 'Roboto+Slab:400,300,700:latin' ] }

  };



  (function() {

    var wf = document.createElement('script');

    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +

      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';

    wf.type = 'text/javascript';

    wf.async = 'true';

    var s = document.getElementsByTagName('script')[0];

    s.parentNode.insertBefore(wf, s);

})();





// Preloader animation

// -------------------



function loadAnimation() {

  $('.loading-circle').delay(500).fadeOut('slow'); 

  $('.loader').delay(1000).fadeOut('slow');

  $('body').delay(400).css({'overflow':'visible'});    

}



$(window).load(function() {

  $('.no-fouc').removeClass('no-fouc');

  loadAnimation();  

});





// Visibility Switch

// -----------------



$(document).ready(function(){

  $('.style-switcher').addClass('styles-hidden');

  $('.visibility-switch').on('click', function(){

    if( $('.style-switcher').hasClass('styles-hidden') == false ) {

      $('.style-switcher').animate({ "left": "-240px" }, 'slow');

      $('.style-switcher').addClass('styles-hidden');

    } else {

      $('.style-switcher').animate({ "left": "0px" }, 'slow');

      $('.style-switcher').removeClass('styles-hidden');

    } 

  });



  var color = $.cookie('theme-color');

  if (color) {

    $("#page-theme").attr("href", "css/bootstrap-theme-" + color + ".css");  

  }

  

});



$(".theme-colors a").each(function(i){

  $(this).click(function(e){

    $.cookie('theme-color', $(this).attr('title'), { expires: 7, path: '/' });

    e.loadAnimation();

    e.preventDefault();

    $("#page-theme").attr("href", "css/bootstrap-theme-" + $(this).attr('title') + ".css");  

  });

  

});





// scrollTo on main nav

// --------------------



// This one is important, many browsers don't reset scroll on refreshes

// Reset all scrollable panes to (0,0)

// -----------------------------------



$('div.pane').scrollTo(0);

$.scrollTo(0);



// Set navigation for clicks with scrollTo

// ---------------------------------------

$('a[href="#home"]').click(function(e) {

  e.preventDefault();

  $(document).scrollTo('#home', 600);

});



$('a[href="#product"]').click(function(e) {

  e.preventDefault();

  $(document).scrollTo('#product', 600);

});



$('a[href="#services"]').click(function(e) {

  e.preventDefault();

  $(document).scrollTo('#services', 600);

});



$('a[href="#pricing"]').click(function(e) {

  e.preventDefault();

  $(document).scrollTo('#pricing', 600);

});



$('a[href="#portfolio"]').click(function(e) {

  e.preventDefault();

  $(document).scrollTo('#portfolio', 600);

});



$('a[href="#testimonials"]').click(function(e) {

  e.preventDefault();

  $(document).scrollTo('#testimonials', 600);

});



$('a[href="#team"]').click(function(e) {

  e.preventDefault();

  $(document).scrollTo('#team', 600);

});



$('a[href="#faq"]').click(function(e) {

  e.preventDefault();

  $(document).scrollTo('#faq', 600);

});



$('a[href="#history"]').click(function(e) {

  e.preventDefault();

  $(document).scrollTo('#history', 600);

});



$('a[href="#contact"]').click(function(e) {

  e.preventDefault();

  $(document).scrollTo('#contact', 600);

});





// Text rotator with IE detection

// Used in the staging area with a fade fall back on IE

// ----------------------------------------------------

function detectIE() {

  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');



  if (msie > 0) {



    // IE 10 or older => return version number, textrotator will animate as dissolve

    // -----------------------------------------------------------------------------

    $(".rotate").textrotator({

      animation: "dissolve",

      separator: ",",

      speed: 2000

    });

  return false;

  }



  var trident = ua.indexOf('Trident/');

  if (trident > 0) {



    // IE 11 => return version number, textrotator will animate as dissolve

    // --------------------------------------------------------------------

    $(".rotate").textrotator({

      animation: "dissolve",

      separator: ",",

      speed: 2000

    });

  return false;

  }



  var edge = ua.indexOf('Edge/');

  if (edge > 0) {



     // Edge (IE 12+) => return version number, textrotator will animate as dissolve

     // ----------------------------------------------------------------------------

    $(".rotate").textrotator({

      animation: "dissolve",

      separator: ",",

      speed: 2000

  });

  return false;

  }



  // Other browser => textrotator will animate as flip

  // -------------------------------------------------

  $(".rotate").textrotator({

    animation: "flip",

    separator: ",",

    speed: 2000

  });

  return false;

}



// Run the previous function that detects if browser is IE and fades or flips text

// -------------------------------------------------------------------------------

detectIE();





// Animate the scroll-link to bounce and at hover to rubberBand

// Note that the animation is done with CSS, here just adding and removing classes

// -------------------------------------------------------------------------------

$('.scroll-link').addClass('animated bounce');

$('.scroll-link').mouseenter(function(){

  $(this).removeClass('animated bounce').addClass('animated rubberBand');

}); 

$('.scroll-link').mouseleave(function(){

  $(this).removeClass('animated rubberBand').addClass('animated bounce');

});





// Configure and initialize wow.js for animations on scroll

// --------------------------------------------------------

var wow = new WOW({

  boxClass:     'wow',

  animateClass: 'animated',

  offset:       200,

  mobile:       false

});



wow.init();





// Adding scrollspy from Bootstrap

// -------------------------------

$('body').scrollspy({ target: '.navbar-spy' });





// Adding magnific-popup.js

// Used in portfolio gallery to open larger images with details

// ------------------------------------------------------------

$(window).load(function() {

  // First define in a data object the items you have

  // ------------------------------------------------

  var data = [

    {

      projectTitle: 'Branding Project 1', 

      // Key "projectTitle" means that Magnific Popup will look for an element with class "mfp-projectTitle" in markup and will replace its inner HTML with the value.

      

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      // Key "projectLongDescription" means that Magnific Popup will look for an element with class "mfp-projectLongDescription" and will change its inner HTML with the value.

      

      projectImage: '<img src="images/branding-image-1.jpg" alt="brand-image-1" />'

    },

    

    {

      projectTitle: 'Mobile Project 1',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/mobile-image-1.jpg" alt="mobile-image-1" />'

    },

    

    {

      projectTitle: 'Web Design Project 1',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/web-design-1.jpg" alt="web-design-1" />'

    },



    {

      projectTitle: 'Mobile Project 2',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/mobile-image-2.jpg" alt="mobile-image-2" />'

    },



    {

      projectTitle: 'Branding Project 2', 

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/branding-image-2.jpg" alt="brand-image-2" />'

    },



    {

      projectTitle: 'Web Design Project 2',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/web-design-2.jpg" alt="web-design-2.jpg" />'

    },



    {

      projectTitle: 'Web Design Project 3',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/web-design-3.jpg" alt="web-design-3.jpg" />'

    },



    {

      projectTitle: 'Web Design Project 4',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',

      projectImage: '<img src="images/web-design-4.jpg" alt="web-design-4.jpg" />'

    },



    {

      projectTitle: 'Mobile Project 3',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/mobile-image-3.jpg" alt="mobile-image-3.jpg" />'

    },



    {

      projectTitle: 'Mobile Project 4',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/mobile-image-4.jpg" alt="mobile-image-4.jpg" />'

    },



    {

      projectTitle: 'Branding Project 3', 

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/branding-image-3.jpg" alt="brand-image-3" />'

    },



    {

      projectTitle: 'Mobile Project 5',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/mobile-image-5.jpg" alt="mobile-image-5.jpg" />'

    },



    {

      projectTitle: 'Web Design Project 5',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/web-design-5.jpg" alt="web-design-5.jpg" />'

    },



    {

      projectTitle: 'Branding Project 4', 

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/branding-image-4.jpg" alt="brand-image-4" />'

    },



    {

      projectTitle: 'Web Design Project 6',

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/web-design-6.jpg" alt="web-design-6.jpg" />'

    },



    {

      projectTitle: 'Branding Project 5', 

      projectLongDescription: 'Curabitur vulputate ante quis tellus sodales, et volutpat nisl imperdiet. Ut ac sollicitudin odio. Quisque eleifend, lorem sagittis accumsan tristique, elit purus ullamcorper ex, sit amet vestibulum erat tortor sit amet purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 

      projectImage: '<img src="images/branding-image-5.jpg" alt="brand-image-5" />'

    }

  ];



  // Now initialize the popup

  // ------------------------

  $('.magnific-popup a').each(function(){

    var $this = $(this),

        index = $this.data('index');

    

    $this.magnificPopup({ 

      key: 'my-popup',

      removalDelay:400, 

      mainClass: 'mfp-fade',

      items: data,

      index: index,

      type: 'inline',

      inline: {



        // Define markup. Class names should match key names.

        // --------------------------------------------------

        markup: '<div class="white-popup"><div class="mfp-close"></div>'+

                  '<div class="mfp-projectImage"></div>'+

                    '<h3 class="mfp-projectTitle"></h3>'+

                    '<p class="mfp-projectLongDescription"></p>'+

                '</div>'

      },

      gallery: {

        enabled: true 

      }

    });

  });

  // end initialize the popup

});





// Adding isotope.js for portfolio section

// Needs to be added on window.load, not document ready to set the correct height for it's main container

// ------------------------------------------------------------------------------------------------------

$(window).load(function() {



  // Initialize Isotope

  // ------------------

  var $container = $('.isotope').isotope({

    itemSelector: '.element-item',

    layoutMode: 'fitRows'

  });



  // Bind filter button click

  // ------------------------

  $('#filters').on( 'click', 'button', function() {

    var filterValue = $( this ).attr('data-filter');

    // use filterFn if matches value

    // filterValue = filterFns[ filterValue ] || filterValue;

    $container.isotope({ filter: filterValue });

  });

  

  // Change is-checked class on buttons

  // ----------------------------------

  $('.button-group').each( function( i, buttonGroup ) {

    var $buttonGroup = $( buttonGroup );

    $buttonGroup.on( 'click', 'button', function() {

      $buttonGroup.find('.is-checked').removeClass('is-checked');

      $( this ).addClass('is-checked');

    });

  });

  

  $("#filters.btn-group > .btn").click(function(){

      $(this).addClass("active").siblings().removeClass("active");

  });

});





// Hover animation over portfolio thumnails

// ----------------------------------------

$(function() {

  $('.element-item').hover(function(){

    $(this).find('.project-overlay').animate({opacity:1},{queue:false,duration:250});

    $(this).find('.project-text').animate({top:0},{queue:false,duration:300});

    $(this).find('a').animate({left:'20px'},{queue:false,duration:100});

  }, function(){

    $(this).find('.project-overlay').animate({opacity:0},{queue:false,duration:250});

    $(this).find('.project-text').animate({top:'-100%'},{queue:false,duration:300});

    $(this).find('a').animate({left:'-100%'},{queue:false,duration:100});

  });

});





// Initialize owl corousel

// -----------------------

$(function() {

  $("#owl-example").owlCarousel({

      navigation : true, // Show next and prev buttons

      slideSpeed : 500,

      paginationSpeed : 500,

      singleItem:true

  });

});



// Initialize tooltips

// -------------------

$('[data-toggle="tooltip"]').tooltip();





// Show tooltip for the members when hovering over entire card

// -----------------------------------------------------------

$('.team-member').hover(function(){

  $(this).find('.team-member-pic').tooltip('show');

}, function(){

  $(this).find('.team-member-pic').tooltip('hide');

});







// Initialize knob and animate values when inview

// ----------------------------------------------

$(window).on('load resize click', function() {





  function drawingKnobs() {

    

    $('.dial').each(function () {

      var $this = $(this);

      var myVal = $this.attr("value");

      

      // setup the color for the value via Js.

      // another way to do it is via data-fgColor attribute in HTML and comment it out here.

      var knobColor = "#606060";



      $this.knob({

        //configuring the knob color using the variable set above

        'fgColor': knobColor,



        //configuring the output as percentage

        draw: function () {

          $(this.i).val(this.cv + '%');

        }

      });



      // Inview.js should be loaded first!

      // The script basically checks and acts once when selected element enters the viewport

      // ------------------------------------------------------------------------------

      $('.gauges').one('inview', function(event, isInView) {

        if (isInView) {



          // Animating values with animate()

          // -------------------------------

          $({

              value: 0

            }).animate({

              value: myVal

            }, 

            {

              duration: 1200,

              easing: 'swing',

              step: function () {

                $this.val(Math.round(this.value)).trigger('change');

            }

          });

        }

      });

    });

  } 

  // end drawingKnobs



  // call drawingKnobs()

  drawingKnobs();



});





// Collapsable FAQs Panels

// -----------------------

$(".collapse-trigger").on('click', function () {

  // If the panel isn't expanded on click it expands

  // The icon is also changed from plus to minus

  // -------------------------------------------

  if( $(this).attr('aria-expanded') == 'false' ) {

    $(this).addClass('expanded-style');

    $(this).find('i').removeClass('fa-plus').addClass('fa-minus');

  } else {

    // Else it collapses and minus becomes plus

    // ----------------------------------------

    $(this).removeClass('expanded-style');

    $(this).find('i').addClass('fa-plus').removeClass('fa-minus');

  }

});





// Initialize timeline - the jquery.cntl.js plugin

// -----------------------------------------------

$(document).ready(function(){

  $('.cntl').cntl({

    revealbefore: 300,

    anim_class: 'cntl-animate'

  });

});



// Validate the Form - Contact Form & Subsribe to Newsletter Form

// Uses the jquery validaton plugin - http://jqueryvalidation.org/

// --------------------------------------------------------------

$().ready(function(){



  // Call the validate method on the comingsoon subscription form

  // ------------------------------------------------------------

  $("#getQuoteForm").validate({

    

    // Set the rules for the form fields

    // ---------------------------------

    rules: {

      quote_contact_name: {

        required: true,

        minlength: 2

      },

      quote_contact_email: {

        required: true,

        minlength: 5,

        email:true

      },

      quote_contact_message: "required"

    },



    // Set the messages for the above rules

    // ------------------------------------

    messages: {

      quote_contact_name: {

        required: "Mandatory field.",

        minlength: "Can't be that short."

      },

      quote_contact_email: {

        required: "We might need to contact you.",

        minlength: "Your email can't be that short.",

        email: "Please, use a correct email address format."

      },

      quote_contact_message: "Tell us something here."

    },



    // Function for highlight working with bootstrap structure

    // -------------------------------------------------------

    highlight: function(element) {

        var id_attr = "#" + $( element ).attr("id") + "1";

        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');

        $(id_attr).removeClass('glyphicon-ok').addClass('glyphicon-exclamation-sign');         

    },



    // Function for unhighlight working with bootstrap structure

    // ---------------------------------------------------------

    unhighlight: function(element) {

        var id_attr = "#" + $( element ).attr("id") + "1";

        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');

        $(id_attr).removeClass('glyphicon-exclamation-sign').addClass('glyphicon-ok');         

    },



    // Error output if the plugin detects rules were broken

    // ----------------------------------------------------

    errorElement: 'span',

    errorClass: 'help-block text-right',

    errorPlacement: function(error, element) {

        if(element.length) {

            error.insertAfter(element);

        } else {

        error.insertAfter(element);

        }

    },



    // What to do on submit - example of success message

    // -------------------------------------------------

    submitHandler: function(form) {

      $('#successForm').modal('show');

      return false;  

    }  

  }); 

  // end validation for the getQuoteForm form



  // Call the validate method on the comingsoon subscription form

  // ------------------------------------------------------------

  $("#comingsoon").validate({

    

    // Set Rule(s)

    // -----------

    rules: {

      newsletter_mail_stage: {

        required: true,

        email: true

      }

    },



    // Set message(s)

    // --------------

    messages: {

      newsletter_mail_stage: {

        required: "Please insert email address.",

        email: "Please use a correct format."

      }

    }, 



    // Function for highlight working with bootstrap structure

    // -------------------------------------------------------

    highlight: function(element) {

        var id_attr = "#" + $( element ).attr("id") + "1";

        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');

        $(id_attr).removeClass('glyphicon-ok').addClass('glyphicon-exclamation-sign');         

    },



    // Function for unhighlight working with bootstrap structure

    // ---------------------------------------------------------

    unhighlight: function(element) {

        var id_attr = "#" + $( element ).attr("id") + "1";

        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');

        $(id_attr).removeClass('glyphicon-exclamation-sign').addClass('glyphicon-ok');         

    },



    // Error output if the plugin detects rules were broken

    // ----------------------------------------------------

    errorElement: 'span',

    errorClass: 'help-block text-right',

    errorPlacement: function(error, element) {

        if(element.length) {

            error.insertAfter(element);

        } else {

        error.insertAfter(element);

        }

    },

    

    // What to do on submit - example of success message

    // -------------------------------------------------

    submitHandler: function(form) {

      $('#newsletterSuccessForm').modal('show');

      return false;  

    }  

  }); 

  // end validation for the comingsoon form





  // Call the validate method on the newsletter subscription form

  // ------------------------------------------------------------

  $("#newsletter").validate({

    

    // Set Rule(s)

    // -----------

    rules: {

      newsletter_mail: {

        required: true,

        email: true

      }

    },



    // Set message(s)

    // --------------

    messages: {

      newsletter_mail: {

        required: "Please insert email address.",

        email: "Please use a correct format."

      }

    }, 



    // Function for highlight working with bootstrap structure

    // -------------------------------------------------------

    highlight: function(element) {

        var id_attr = "#" + $( element ).attr("id") + "1";

        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');

        $(id_attr).removeClass('glyphicon-ok').addClass('glyphicon-exclamation-sign');         

    },



    // Function for unhighlight working with bootstrap structure

    // ---------------------------------------------------------

    unhighlight: function(element) {

        var id_attr = "#" + $( element ).attr("id") + "1";

        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');

        $(id_attr).removeClass('glyphicon-exclamation-sign').addClass('glyphicon-ok');         

    },



    // Error output if the plugin detects rules were broken

    // ----------------------------------------------------

    errorElement: 'span',

    errorClass: 'help-block text-right',

    errorPlacement: function(error, element) {

        if(element.length) {

            error.insertAfter(element);

        } else {

        error.insertAfter(element);

        }

    },

    

    // What to do on submit - example of success message

    // -------------------------------------------------

    submitHandler: function(form) {

      $('#newsletterSuccessForm').modal('show');

      return false;  

    }  

  }); 

  // end validation for the newsletter form



  // Call the validate method on the contact form

  // --------------------------------------------



  $("#contactForm").validate({

    

    // Set the rules for the form fields

    // ---------------------------------

    rules: {

      contact_name: {

        required: true,

        minlength: 2

      },

      contact_email: {

        required: true,

        minlength: 5,

        email:true

      },

      contact_message: "required"

    },



    // Set the messages for the above rules

    // ------------------------------------

    messages: {

      contact_name: {

        required: "Ops! Really now, you must have a name.",

        minlength: "Your name can't be that short."

      },

      contact_email: {

        required: "We might need to contact you.",

        minlength: "Your email can't be that short.",

        email: "Please, use a correct email address format."

      },

      contact_message: "Tell us something here."

    },



    // Function for highlight working with bootstrap structure

    // -------------------------------------------------------

    highlight: function(element) {

        var id_attr = "#" + $( element ).attr("id") + "1";

        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');

        $(id_attr).removeClass('glyphicon-ok').addClass('glyphicon-exclamation-sign');         

    },



    // Function for unhighlight working with bootstrap structure

    // ---------------------------------------------------------

    unhighlight: function(element) {

        var id_attr = "#" + $( element ).attr("id") + "1";

        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');

        $(id_attr).removeClass('glyphicon-exclamation-sign').addClass('glyphicon-ok');         

    },



    // Error output if the plugin detects rules were broken

    // ----------------------------------------------------

    errorElement: 'span',

    errorClass: 'help-block text-right',

    errorPlacement: function(error, element) {

        if(element.length) {

            error.insertAfter(element);

        } else {

        error.insertAfter(element);

        }

    },



    // What to do on submit - example of success message

    // -------------------------------------------------

    submitHandler: function(form) {

      $('#successForm').modal('show');

      return false;  

    }

  });

});



// Reset the contact form when success message shown as bootstrap modal is dismissed

// ---------------------------------------------------------------------------------

$('#successForm').on('hidden.bs.modal', function() {

  $('#contactForm').trigger("reset");

  $('#contactForm .form-group').find('.glyphicon').removeClass('glyphicon-ok');

});



// Reset the getQuoteFrom when success message shown as bootstrap modal is dismissed

// ---------------------------------------------------------------------------------

$('#successForm').on('hidden.bs.modal', function() {

  $('#getQuoteForm').trigger("reset");

  $('#getQuoteForm .form-group').find('.glyphicon').removeClass('glyphicon-ok');

});



// Reset the newsletter form when success message shown as bootstrap modal is dismissed

// ------------------------------------------------------------------------------------

$('#newsletterSuccessForm').on('hidden.bs.modal', function() {

  $('#newsletter').trigger("reset");

  $('#newsletter .form-group').find('.glyphicon').removeClass('glyphicon-ok');

});



// Reset the comingsoon form when success message shown as bootstrap modal is dismissed

// ------------------------------------------------------------------------------------

$('#newsletterSuccessForm').on('hidden.bs.modal', function() {

  $('#comingsoon').trigger("reset");

  $('#comingsoon .form-group').find('.glyphicon').removeClass('glyphicon-ok');

});



// Google Map - https://developers.google.com/maps/documentation/javascript/

// -------------------------------------------------------------------------

(function(window, google){



  // The action happens in self invoking function

  // Configure map options

  // ---------------------



  var options = {

    center: {

      lat: 44.433170,

      lng: 26.117966

      //to get the latitude and longitude use: http://www.latlong.net/

    },

    zoom: 16,

    disableDefaultUI: false,

    scrollwheel: false,

    draggable: false,

    maxZoom: 20,

    minZoom: 16,

    zoomControlOptions: {

      position: google.maps.ControlPosition.RIGHT_BOTTOM,

      style: google.maps.ZoomControlStyle.DEFAULT

    },

    mapTypeControlOptions: {

       position: google.maps.ControlPosition.TOP_CENTER

    }

  },



  

  // A div with the id #map-canvas was created before in the HTML document

  // ---------------------------------------------------------------------

  element = document.getElementById('map-canvas'),



  

  // Placing the map in the selected div above

  // -----------------------------------------

  map = new google.maps.Map(element, options);



  

  // Custom image marker

  // -------------------

  image = 'images/map-custom-pin.png';

  customMarker = new google.maps.Marker({

    position: {

      lat: 44.433170,

      lng: 26.117966

    },

    map: map,

    icon: image,

    animation: google.maps.Animation.BOUNCE,

    title:"Our Agency HQ"

  });





  // Create an info-window for the marker

  // Create the content as HTML

  // --------------------------

  contentString = '<div>' +

                    '<h3>Our Agency HQ</h3>'+

                    '<div>'+

                      '<p><b>Our Address:</b> Street Fetitelor, no. 6 <br>'+

                      '<b>Working hours:</b> 9:00 a.m. - 9 p.m.<br>'+

                      '<b>Phone numbers:</b> '+

                      '0755.000.200 / 0755.000.200 </p>'+

                    '</div>'+

                  '</div>';



  // Create the infowindow variable and assigned the content to it

  // -------------------------------------------------------------

  infowindow = new google.maps.InfoWindow({

    content: contentString

  });



    

  // Add the event listener for displaying the content

  // -------------------------------------------------

  customMarker.addListener('click', function(){

    customMarker.setAnimation(null);

    infowindow.open(map, customMarker);

  });



  

  // Make the marker bounce again when windowinfo is closed

  // ------------------------------------------------------

  infowindow.addListener('closeclick', function(){

    customMarker.setAnimation(google.maps.Animation.BOUNCE);

  });



}(window, google));



// Timecircles.js

// --------------



$(window).on('load resize', function(){

  $("#dateCountdown").TimeCircles({

      "direction": "Counter-clockwise",

      "animation": "smooth",

      "bg_width": 0.2,

      "fg_width": 0.03333333333333333,

      "circle_bg_color": "#363636",

      "time": {

          "Days": {

              "text": "Days",

              "color": "#fff",

              "show": true

          },

          "Hours": {

              "text": "Hours",

              "color": "#fff",

              "show": true

          },

          "Minutes": {

              "text": "Minutes",

              "color": "#fff",

              "show": true

          },

          "Seconds": {

              "text": "Seconds",

              "color": "#fff",

              "show": true

          }

      }

  });

});



$(window).resize(function(){

    $("#dateCountdown").TimeCircles().rebuild();

});





// Swiper Carousel Initialize

// --------------------------



$(document).ready(function () {



var time = 4; // time in seconds

 

var $progressBar,

    $bar, 

    $elem, 

    isPause, 

    tick,

    percentTime;



  //Init the carousel

  $("#owl-demo").owlCarousel({

    navigation:true,

    slideSpeed : 500,

    paginationSpeed : 500,

    singleItem : true,

    afterInit : progressBar,

    afterMove : moved,

    startDragging : pauseOnDragging

  });



  //Init progressBar where elem is $("#owl-demo")

  function progressBar(elem){

    $elem = elem;

    //build progress bar elements

    buildProgressBar();

    //start counting

    start();

  }



  //create div#progressBar and div#bar then prepend to $("#owl-demo")

  function buildProgressBar(){

    $progressBar = $("<div>",{

      id:"progressBar"

    });

    $bar = $("<div>",{

      id:"bar"

    });

    $progressBar.append($bar).prependTo($elem);

  }



  function start() {

    //reset timer

    percentTime = 0;

    isPause = false;

    //run interval every 0.01 second

    tick = setInterval(interval, 10);

  };



  function interval() {

    if(isPause === false){

      percentTime += 1 / time;

      $bar.css({

         width: percentTime+"%"

       });

      //if percentTime is equal or greater than 100

      if(percentTime >= 100){

        //slide to next item 

        $elem.trigger('owl.next')

      }

    }

  }



  //pause while dragging 

  function pauseOnDragging(){

    isPause = true;

  }



  //moved callback

  function moved(){

    //clear interval

    clearTimeout(tick);

    //start again

    start();

  }



  //uncomment this to make pause on mouseover 

  // $elem.on('mouseover',function(){

  //   isPause = true;

  // })

  // $elem.on('mouseout',function(){

  //   isPause = false;

  // })



});





$(document).ready(function(){

  setTimeout(function(){ 



    $('.video-section').vide({



      mp4: 'video/video-demo',

      webm: 'video/video-demo',

      ogv: 'video/video-demo',

      poster: 'images/video-demo'



      }, {

        muted: true,

        loop: true,

        autoplay: true,

        posterType: 'detect',

        resizing: true,

        bgColor: 'transparent' 

      }); 



  }, 1000);

  // end setTimeout()



});

