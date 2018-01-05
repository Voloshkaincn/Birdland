jQuery(document).ready(function($) {


  	$('.reviews-slider').slick({
  		prevArrow: '<button type="button" class="slick-prev"><</button>',
  		nextArrow: '<button type="button" class="slick-next">></button>'
  	});

	function slider(){
	   	var $carousel = $('.gallery-slider').slick({
	  		prevArrow: '<button type="button" class="slick-prev"><</button>',
	  		nextArrow: '<button type="button" class="slick-next">></button>',
	  		rows: 2,
	  		slidesToShow: 4,
	  		slidesToScroll: 1,
	  		infinite: false,
	  		responsive: [{
			    breakpoint: 991,
					settings: {
						slidesToShow: 3,
				    },
			},
			{
				breakpoint: 576,
					settings: {
						slidesToShow: 2,
				    }
			},
			{
				breakpoint: 425,
					settings: {
						slidesToShow: 1,
				    }
			}]
	  	});
	};

	slider();

	jQuery(".gallery-slider .slide a").fancybox({
	});

	var allSlides = [];

	$('.gallery-slider .slide').each(function(i,elem) {
	    var slide = new Object();
	    slide.index = $(this).index(),
	    slide.body = $(this);
	    allSlides[i] = slide;
	});

	$('.gallery-tag').on('click', function(){
		
		$('.gallery-slider').slick('unslick');
		$('.gallery-slider').empty();
		if ($(this).hasClass('gallery-tag_all')){
			showAllSlides();
		};
		if ($(this).hasClass('gallery-tag_photo')){
			showPhotolSlides();
		};
		if ($(this).hasClass('gallery-tag_video')){
			showVideoSlides();
		};

		slider();
		$('.gallery-tag').removeClass('active');
		$(this).addClass('active');
	});

	function showAllSlides(){
	  	allSlides.forEach (function(item, i, arr){
		    $(arr[i]['body']).appendTo('.gallery-slider');    
	  	});
	};
	function showPhotolSlides(){
	  	allSlides.forEach (function(item, i, arr){
		    if (item.body.hasClass('slide-photo')){
		      $(arr[i]['body']).appendTo('.gallery-slider');
		    }    
	  	});
	};
	function showVideoSlides(){
	  	allSlides.forEach (function(item, i, arr){
		    if (item.body.hasClass('slide-video')){
		      $(arr[i]['body']).appendTo('.gallery-slider');
		    }    
	  	});
	};


  $('.hamburger').on('click', function(){	
		$('#menu').slideToggle(300, function(){
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
			}
		});
		$('body').toggleClass('ofHidden');
	});

	$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });

	var $wrapper = $(".wrapper");   
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100){
                $('.logo2').css('display','flex').slideDown('slow'); $wrapper.addClass('fixed').slideDown('slow');
				
            } 
  			else if($(this).scrollTop() <= 100 && $wrapper.hasClass("fixed")) {
                $wrapper.slideUp('6000',function(){
                    $(this).removeClass("fixed")
                           .slideDown('6000');
					$('.logo2').css('display','none');
                });
            }
        });

        $(".scroll-up").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});   

    $('.call-modal').click(function(){
    	var modal_id = "#" + $(this).data("modal");
    	event.preventDefault();
		$('#overlay').fadeIn(400, function(){
			$(modal_id).css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
		});
    });
    $('.modal_close, #overlay').click( function(){
		$('.modal')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});

	jQuery(function($){
   		$(".phone input").mask("(999) 999-9999");
   });

	$('.advantages_show-more_down').click(function(){
		$('.block-advantages_center').addClass('active');
		$('.advantages_show-more_down').removeClass('active');
		$('.advantages_show-more_up').addClass('active');
	});
	$('.advantages_show-more_up').click(function(){
		$('.block-advantages_center').removeClass('active');
		$('.advantages_show-more_down').addClass('active');
		$('.advantages_show-more_up').removeClass('active');
	});

});