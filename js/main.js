 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

})(jQuery);

// Back to top
$(document).ready(function(){ 

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
	}); 
});

document.addEventListener('DOMContentLoaded', function() {
	const viewButtons = document.querySelectorAll('#publications-section .view-details');
	const body = document.body;
  
	viewButtons.forEach(button => {
	  button.addEventListener('click', function() {
		const overlay = this.nextElementSibling.cloneNode(true);
		overlay.classList.add('active');
		body.appendChild(overlay);
		body.style.overflow = 'hidden'; // Prevent scrolling when overlay is open
  
		const closeButton = overlay.querySelector('.close-overlay');
		closeButton.addEventListener('click', closeOverlay);
  
		overlay.addEventListener('click', function(e) {
		  if (e.target === this) {
			closeOverlay();
		  }
		});
	  });
	});
  
	function closeOverlay() {
	  const activeOverlay = document.querySelector('.publication-overlay.active');
	  if (activeOverlay) {
		activeOverlay.remove();
		body.style.overflow = ''; // Restore scrolling
	  }
	}
});


// document.addEventListener('DOMContentLoaded', function() {
// 	const scrollContainer = document.querySelector('.publications-scroll');
// 	const scrollWrapper = document.querySelector('.publications-wrapper');
// 	const leftArrow = document.querySelector('.scroll-left');
// 	const rightArrow = document.querySelector('.scroll-right');
  
// 	// Show part of the next item
// 	function adjustScroll() {
// 	  const items = scrollWrapper.querySelectorAll('.publication-item');
// 	  const lastItem = items[items.length - 1];
// 	  scrollWrapper.style.paddingRight = `${scrollContainer.offsetWidth - lastItem.offsetWidth}px`;
// 	}
  
// 	// Scroll indicators
// 	function updateScrollIndicators() {
// 	  leftArrow.style.display = scrollContainer.scrollLeft > 0 ? 'flex' : 'none';
// 	  rightArrow.style.display = 
// 		scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth - 10 ? 'flex' : 'none';
// 	}
  
// 	leftArrow.addEventListener('click', () => {
// 	  scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
// 	});
  
// 	rightArrow.addEventListener('click', () => {
// 	  scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
// 	});
  
// 	scrollContainer.addEventListener('scroll', updateScrollIndicators);
  
// 	window.addEventListener('resize', () => {
// 	  adjustScroll();
// 	  updateScrollIndicators();
// 	});
  
// 	// Initial setup
// 	adjustScroll();
// 	updateScrollIndicators();
  
// 	// View details functionality
// 	const viewButtons = document.querySelectorAll('#publications-section .view-details');
// 	const body = document.body;
  
// 	viewButtons.forEach(button => {
// 	  button.addEventListener('click', function() {
// 		const overlay = this.nextElementSibling.cloneNode(true);
// 		overlay.classList.add('active');
// 		body.appendChild(overlay);
// 		body.style.overflow = 'hidden';
  
// 		const closeButton = overlay.querySelector('.close-overlay');
// 		closeButton.addEventListener('click', closeOverlay);
  
// 		overlay.addEventListener('click', function(e) {
// 		  if (e.target === this) {
// 			closeOverlay();
// 		  }
// 		});
// 	  });
// 	});
  
// 	function closeOverlay() {
// 	  const activeOverlay = document.querySelector('.publication-overlay.active');
// 	  if (activeOverlay) {
// 		activeOverlay.remove();
// 		body.style.overflow = '';
// 	  }
// 	}
//   });


//   function toggleDarkMode() {
// 	document.body.classList.toggle('night');
// 	// You might want to save the user's preference here
// 	localStorage.setItem('darkMode', document.body.classList.contains('night'));
//   }
  
//   // Apply dark mode on page load if it was previously enabled
//   document.addEventListener('DOMContentLoaded', function() {
// 	if (localStorage.getItem('darkMode') === 'true') {
// 	  document.body.classList.add('night');
// 	}
//   });

document.addEventListener('DOMContentLoaded', function() {
	const scrollContainers = document.querySelectorAll('.publications-scroll, .projects-scroll');
	
	scrollContainers.forEach(container => {
	  const leftArrow = container.querySelector('.scroll-left');
	  const rightArrow = container.querySelector('.scroll-right');
	  const wrapper = container.querySelector('.publications-wrapper, .projects-wrapper');
	  
	  leftArrow.addEventListener('click', () => {
		container.scrollBy({ left: -300, behavior: 'smooth' });
	  });
	  
	  rightArrow.addEventListener('click', () => {
		container.scrollBy({ left: 300, behavior: 'smooth' });
	  });
	  
	  // Show/hide arrows based on scroll position
	  container.addEventListener('scroll', () => {
		leftArrow.style.display = container.scrollLeft > 0 ? 'flex' : 'none';
		rightArrow.style.display = 
		  container.scrollLeft < container.scrollWidth - container.clientWidth ? 'flex' : 'none';
	  });
	  
	  // Initial check
	  setTimeout(() => {
		leftArrow.style.display = 'none';
		rightArrow.style.display = 
		  container.scrollWidth > container.clientWidth ? 'flex' : 'none';
	  }, 100);
	});
  
	// View details functionality for both publications and projects
	const viewButtons = document.querySelectorAll('#publications-section .view-details, #projects-section .view-details');
	const body = document.body;
  
	viewButtons.forEach(button => {
	  button.addEventListener('click', function() {
		const overlay = this.nextElementSibling.cloneNode(true);
		overlay.classList.add('active');
		body.appendChild(overlay);
		body.style.overflow = 'hidden';
  
		const closeButton = overlay.querySelector('.close-overlay');
		closeButton.addEventListener('click', closeOverlay);
  
		overlay.addEventListener('click', function(e) {
		  if (e.target === this) {
			closeOverlay();
		  }
		});
	  });
	});
  
	function closeOverlay() {
	  const activeOverlay = document.querySelector('.publication-overlay.active, .project-overlay.active');
	  if (activeOverlay) {
		activeOverlay.remove();
		body.style.overflow = '';
	  }
	}
  });