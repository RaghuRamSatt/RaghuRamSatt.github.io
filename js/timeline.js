// jQuery(document).ready(function($){
// 	var $timeline_block = $('.cd-timeline-block');
  
// 	//hide timeline blocks which are outside the viewport
// 	$timeline_block.each(function(){
// 	  if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
// 		$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
// 	  }
// 	});
  
// 	//on scrolling, show/animate timeline blocks when enter the viewport
// 	$(window).on('scroll', function(){
// 	  $timeline_block.each(function(){
// 		if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
// 		  $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
// 		  $(this).addClass('is-visible');
// 		}
// 	  });
// 	});
  
// 	// Hover functionality
// 	$('.cd-timeline-content').hover(
// 	  function() {
// 		$(this).find('.expanded-content').slideDown(200);
// 	  },
// 	  function() {
// 		$(this).find('.expanded-content').slideUp(200);
// 	  }
// 	);
//   });


jQuery(document).ready(function($){
    var $timeline_block = $('.cd-timeline-block');
  
    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });
  
    //on scrolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
                $(this).addClass('is-visible');
            }
        });
    });
  
    // Click functionality for expanding content
    $('.cd-timeline-content').on('click', '.expand-button', function(e) {
        e.preventDefault();
        var $content = $(this).siblings('.expanded-content');
        var $button = $(this);
        if ($content.is(':visible')) {
            $content.slideUp(200);
            $button.text('More');
        } else {
            $content.slideDown(200);
            $button.text('Less');
        }
    });
});