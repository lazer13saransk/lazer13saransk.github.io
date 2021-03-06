
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


  $(".fullscreen").css("height", window_height)
	$(".full_main_img").css("height", Math.min(window_height - $(".navbar").innerHeight(), 393));
  $(".fitscreen").css("height", fitscreen);
  
  

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});

     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });


  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });



    $('.active-works-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });

    $('.active-testimonial').owlCarousel({
        items:2,
        loop:true,
        margin: 20,
        dots: true,
        autoplay:true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>","<span class='lnr lnr-arrow-down'></span>"],        
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });





  // Select all links with hashes
  $('.navbar-nav a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click',function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top-50
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
  });


    $(".skill1").DonutWidget({

      // these are default options
      max: 100, 
      value: 75, 
      text: "", 
      rotate: 0, 
      caption: "", 
      template: [
        '<div class="donut-hole"><span class="donut-filling"></div>', 
        '<div class="donut-bite" data-segment-index="0"></div>', 
        '<div class="donut-bite" data-segment-index="1"></div>', 
        '<div class="donut-caption-wrapper"><span class="donut-caption"></span></div>'
      ].join(''), 
      colors: {
        primary: "#8490ff",
        background: "#eee"
      },
      size: "large"
      
    });

      $(".skill2").DonutWidget({

        // these are default options
        max: 100, 
        value: 95, 
        text: "", 
        rotate: 0, 
        caption: "", 
        template: [
          '<div class="donut-hole"><span class="donut-filling"></div>', 
          '<div class="donut-bite" data-segment-index="0"></div>', 
          '<div class="donut-bite" data-segment-index="1"></div>', 
          '<div class="donut-caption-wrapper"><span class="donut-caption"></span></div>'
        ].join(''), 
        colors: {
          primary: "#8490ff",
          background: "#eee"
        },
        size: "large"
        
      });

      $(".skill3").DonutWidget({

        // these are default options
        max: 100, 
        value: 85, 
        text: "", 
        rotate: 0, 
        caption: "", 
        template: [
          '<div class="donut-hole"><span class="donut-filling"></div>', 
          '<div class="donut-bite" data-segment-index="0"></div>', 
          '<div class="donut-bite" data-segment-index="1"></div>', 
          '<div class="donut-caption-wrapper"><span class="donut-caption"></span></div>'
        ].join(''), 
        colors: {
          primary: "#8490ff",
          background: "#eee"
        },
        size: "large"
        
      });            

      $(document).ready(function() {
          $('#mc_embed_signup').find('form').ajaxChimp();
      });   
  
  
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      // $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
        $('#slider ul li:last-child').prependTo('#slider ul');
    
        function moveLeft() {
            $('#slider ul').animate({
                left: + slideWidth
            }, 200, function () {
                $('#slider ul li:last-child').prependTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };
    
        function moveRight() {
            $('#slider ul').animate({
                left: - slideWidth
            }, 200, function () {
                $('#slider ul li:first-child').appendTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };
    
        $('a.control_prev').click(function () {
            moveLeft();
        });
    
        $('a.control_next').click(function () {
            moveRight();
        });


        var slideCount2 = $('#slider2 ul li').length;
        var slideWidth2 = $('#slider2 ul li').width();
        var slideHeight2 = $('#slider2 ul li').height();
        var sliderUlWidth2 = slideCount2 * slideWidth2;
        
        $('#slider2').css({ width: slideWidth2, height: slideHeight2 });
        
          $('#slider2 ul li:last-child').prependTo('#slider2 ul');
      
          function moveLeft2() {
              $('#slider2 ul').animate({
                  left: + slideWidth2
              }, 200, function () {
                  $('#slider2 ul li:last-child').prependTo('#slider2 ul');
                  $('#slider2 ul').css('left', '');
              });
          };
      
          function moveRight2() {
              $('#slider2 ul').animate({
                  left: - slideWidth2
              }, 200, function () {
                  $('#slider2 ul li:first-child').appendTo('#slider2 ul');
                  $('#slider2 ul').css('left', '');
              });
          };
      
          $('a.control_prev2').click(function () {
              moveLeft2();
          });
      
          $('a.control_next2').click(function () {
              moveRight2();
          });

      setInterval(function () {
          moveRight();
          moveRight2();
      }, 10000);
 });
