
	
	// TRIGGER ANIMATIONS
	// http://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css 
	$(window).bind('load resize', function(){
		
		function onScrollInit( items, trigger ) {
		
			items.each( function() {
				var osElement = $(this),
				osAnimationClass = osElement.attr('data-os-animation'),
				osAnimationDelay = osElement.attr('data-os-animation-delay');

				osElement.css({
					'-webkit-animation-delay':  osAnimationDelay,
					'-moz-animation-delay':     osAnimationDelay,
					'-ms-animation-delay':     	osAnimationDelay,
					'animation-delay':          osAnimationDelay
				});

				var osTrigger = ( trigger ) ? trigger : osElement;

				osTrigger.waypoint(function() {
					osElement.addClass('animated').addClass(osAnimationClass);
					$('.slick-slide .os-animation').removeClass('fadeInUp animated');
					$('.slick-active .os-animation').addClass('fadeInUp animated');
				},{
					//triggerOnce: true,
					offset: '90%'
				});
			});
		
		}
		onScrollInit( $('.os-animation') );

		// IOS BROWSER CLASS
		if( navigator.userAgent.match(/iP(hone|od|ad)/i) ) {
			jQuery('body').addClass('browser-ios');
		}
	
	});

	$(document).ready(function() {
		
		$(".item:nth-child(odd), ul li:nth-child(odd), dl dt:nth-child(odd), dl dd:nth-child(odd), tr:nth-child(odd)").addClass("odd");
		$(".item:nth-child(even), ul li:nth-child(even), dl dt:nth-child(even), dl dd:nth-child(even), tr:nth-child(even)").addClass("even");
		$("ul li:first-child").addClass("first");
		$("ul li:last-child").addClass("last");
		$("span.heading").parent().addClass("heading");
		$("span.intro").parent().addClass("intro");
		$("h1, h2, h3, h4, h5, h6").addClass("heading");

		// DROP DOWN - CLICK & HOVER - MAIN NAV
		$(".navigation nav.main ul li").hover(function(){ 
			$(this).toggleClass("hover"); 
			$(this).toggleClass("hover"); 
		});
		$(".navigation nav.main ul li > i").click(function(){
			if ($(".navigation nav.main ul li > i").length ) { 
				$(this).parent().toggleClass("open");
				$(this).parent().siblings().removeClass("open");
			}
			else{
				$(this).parent().toggleClass("open");
			}
		});
		 $("html").click(function() {
			$(".navigation nav.main ul li.open").removeClass("open");
		});
		$(".navigation nav.main ul li > i").click(function(e){
			e.stopPropagation(); 
		});
		
		// EXPAND MOBILE NAVIVAGTION  
		$(".navigation a.expand").click(function(){
			if ($(".navigation .reveal").length ) { 
				$(".navigation a.expand").toggleClass('active');
				$(".navigation a.expand em").text('Close');
				$("html").toggleClass('reveal_out');
			}
			else{
				$(".navigation a.expand").toggleClass('active');
				$(".navigation a.expand em").text('Menu');
				$("html").toggleClass('reveal_out');
			}
		});
		
		// CONTACT SIDEBAR
		$(".contact-sidebar nav ul li > span").click(function(){
			if ($(".contact-sidebar nav ul li > span").length ) { 
				$(this).parent().toggleClass("open");
				$(this).parent().siblings().removeClass("open");
			}
			else{
				$(this).parent().toggleClass("open");
			}
		});
		$("html").click(function() {
			$(".contact-sidebar nav ul li.open").removeClass("open");
		});
		$(".contact-sidebar nav ul li > span, .contact-sidebar nav ul li div").click(function(e){
			e.stopPropagation(); 
		});
		
		// COUNTRY ALERT BOX
		
		$(".country-alert").delegate("a.close", "click", function(event) {
			event.preventDefault();
			$("body").removeClass("country-alert-on");
			$(this).closest(".country-alert").fadeOut(function(event){
			    $(this).remove();

			});
			setCookie("countryalert", "hide", 365);
		    //Update class
			$("body").removeClass("country-alert_on");
			$("body").addClass("country-alert_off");
			$('body.country-alert_off .banner-takeover .item').innerHeight($(window).height() - 80);
		});  
		
		// VIDEO PLAYING
		$(".video-component a.open").click(function(){
			$(".video-component .video-playing").toggleClass('hidden');
			$(".video-component .container").toggleClass('hidden');
			$(".video-component").toggleClass('no-padding');
		});
		/*$(".video-component a.close").click(function(){
			$(".video-component .video-playing").toggleClass('hidden');
			$(".video-component .container").toggleClass('hidden');
			$(".video-component").toggleClass('no-padding');
		});*/

		// SLIDESHOWS
      	$(".banner .slides").slick({
			arrows: true,
			dots: false,
			infinite: true,
			//speed: 200,
			fade: true,
  			adaptiveHeight: true,
			prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left fa-2x"></i>',
			nextArrow: '<div class="slick-next"><i class="fa fa-angle-right fa-2x"></i>'
		});
      	$(".slideshow").slick({
			arrows: true,
			dots: false,
			infinite: true,
			//speed: 200,
			fade: true,
  			adaptiveHeight: true,
			prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left fa-2x"></i>',
			nextArrow: '<div class="slick-next"><i class="fa fa-angle-right fa-2x"></i>'
		});
      	$(".image-carousel .slides").slick({
			dots: true,
			infinite: true,
			speed: 200,
			easing: 'linear',
			prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left fa-2x"></i>',
			nextArrow: '<div class="slick-next"><i class="fa fa-angle-right fa-2x"></i>',
			arrows: false,
			slidesToShow: 4,
			slidesToScroll: 4,
				responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
			]
		});
      	$(".quote-carousel .slides").slick({
			arrows: true,
			dots: true,
			infinite: true,
			//speed: 200,
			//fade: true,
  			adaptiveHeight: true,
			prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left fa-2x"></i>',
			nextArrow: '<div class="slick-next"><i class="fa fa-angle-right fa-2x"></i>'
		});
		
		// BACK TO TOP
		if ( ($(window).height() + 100) < $(document).height() ) {
	        $('#top-link-block').addClass('show').affix({
	            // how far to scroll down before link "slides" into view
	            offset: {top:300}
	        });
		}
	    $('.advanced-component a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - 80)
	        }, 800, 'easeInOutExpo');
	        event.preventDefault();
	    });
			
		//var $header = $(".no-sub header"),
		var $header = $("header"),
            $clone = $header.before($header.clone().addClass("clone"));
        
        $(window).on("scroll", function() {
            var fromTop = $(window).scrollTop();
            $("body").toggleClass("down", (fromTop > 300));
        });

		var $sub = $(".has-sub section.sub"),
            $clone = $sub.before($sub.clone().addClass("clone"));
        
        $(window).on("scroll", function() {
            var fromTop = $(window).scrollTop();
            $("body").toggleClass("down", (fromTop > 300));
        });

	    //Region Selector
        $("#regionSelector").change(function () {
            location.href = $(this).val();
        })

		$('.banner-takeover .item').innerHeight($(window).height() - 80);
		
		$('.comparison-table .table-heading').matchHeight({
			byRow:true
		});
		$('.comparison-table .table-data').matchHeight({
			byRow:true
		});
		$('.comparison-table .table-data .title, .comparison-table .table-data .info').matchHeight({
			byRow:true
		});
		
		// EXPAND / COLLAPSE COMPARISON TABLE
		$(".table-row .table-heading-left").click(function(){
			if ($(".table-row .table-heading-left").length ) { 
				$(this).parent().toggleClass("closed-xs");
			}
			else{
				$(this).parent().toggleClass("closed-xs");
			}
		});
		
	});
	
	// OPEN MULTIPLE COLLAPSE PANELS
	// http://www.bootply.com/90JfjI2Q7n
	$(function () {	
				
		$('a[data-toggle="collapse"]').on('click',function(){
			var objectID=$(this).attr('href');
			if($(objectID).hasClass('in'))
			{
				$(objectID).collapse('hide');
			}
			else{
				$(objectID).collapse('show');
			}
		});
		
		// EXPAND ALL
		$('#expandAll').on('click',function(){
			$('a[data-toggle="collapse"]').each(function(){
				var objectID=$(this).attr('href');
				if($(objectID).hasClass('in')===false)
				{
					$(objectID).collapse('show');
				}
			});
		});
		
		// COLLAPSE ALL
		$('#collapseAll').on('click',function(){
			$('a[data-toggle="collapse"]').each(function(){
				var objectID=$(this).attr('href');
				$(objectID).collapse('hide');
			});
		});
	});
	
	$(window).bind('load', function(){
		
		var $playLoader = $(".percentages .item .progress-bar");

		$playLoader.waypoint(function(direction) {
			if (direction === 'down') {
				$(".percentages .item .progress-bar").loading();
			}
		}, { triggerOnce: true, offset: '80%' });

		$playLoader.waypoint(function(direction) {
			if (direction === 'up') {
				// do stuff
			}
		}, {
		offset: function() {
			// This is the calculation that would give you
			// "bottom of element hits middle of window"
			return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
			}
		});
	
	});
	
	// LIGTHBOX
	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    	event.preventDefault();
        $(this).ekkoLightbox();
	}); 
	
	// MATCH HEIGHT OVERLAY TO IMAGE HEIGHT
	$(window).bind("load resize",function(e){
		
		var img1 = $(".gallery img");
		$(".gallery .overlayicon").css({width:img1.width(), height:img1.height()});
		
		var img2 = $(".promo_pods .videopod img");
		$(".promo_pods .videopod .overlayicon").css({width:img2.width(), height:img2.height()});
		
		var img3 = $(".promo_pods .imagepod img");
		$(".promo_pods .imagepod .overlayicon").css({width:img3.width(), height:img3.height()});
		
		var img4 = $(".video-component .image.video img");
		$(".video-component .image.video .overlayicon").css({width:img4.width(), height:img4.height()});
		
		//var img5 = $(".text-with-image_video.framed .image.video img");
		//$(".text-with-image_video.framed .image.video .overlayicon").css({width:img5.width(), height:img5.height()});
		
		var img5 = $(".text-with-image_video .image");
		$(".text-with-image_video .image.video .overlayicon").css({width:img5.width(), height:img5.height()});
		
		var img6 = $(".text-with-image_video .image.video");
		$(".text-with-image_video .image.video a, .text-with-image_video .image.video::after").css({width:img6.width(), height:img6.height()});
		
		var img7 = $(".resources-strip .item.document .image img.standard");
		$(".resources-strip .item.document .image .doc-overlay").css({width:img7.width(), height:img7.height()});
		
		$('body.country-alert_on .banner-takeover .item').innerHeight($(window).height() - 195);
		$('body.country-alert_off .banner-takeover .item').innerHeight($(window).height() - 80);
		
		// VALIGN
		$('.banner .slides .item:nth-child(1) .valign').valign();
		$('.banner .slides .item:nth-child(2) .valign').valign();
		$('.banner .slides .item:nth-child(3) .valign').valign();
		$('.banner .slides .item:nth-child(4) .valign').valign();
		$('.banner .slides .item:nth-child(5) .valign').valign();
		$('.banner .slides .item:nth-child(6) .valign').valign();
		$('.banner .slides .item:nth-child(7) .valign').valign();
		$('.banner .slides .item:nth-child(8) .valign').valign();
		$('.banner .slides .item:nth-child(9) .valign').valign();
		$('.banner .slides .item:nth-child(10) .valign').valign();
		
		// VALIGN
		$('.banner-short .item:nth-child(1) .valign').valign();
		$('.banner-short .item:nth-child(2) .valign').valign();
		$('.banner-short .item:nth-child(3) .valign').valign();
		$('.banner-short .item:nth-child(4) .valign').valign();
		$('.banner-short .item:nth-child(5) .valign').valign();
		$('.banner-short .item:nth-child(6) .valign').valign();
		$('.banner-short .item:nth-child(7) .valign').valign();
		$('.banner-short .item:nth-child(8) .valign').valign();
		$('.banner-short .item:nth-child(9) .valign').valign();
		$('.banner-short .item:nth-child(10) .valign').valign();
		
		// VALIGN
		$('.banner-takeover .item:nth-child(1) .valign').valign();
		$('.banner-takeover .item:nth-child(2) .valign').valign();
		$('.banner-takeover .item:nth-child(3) .valign').valign();
		$('.banner-takeover .item:nth-child(4) .valign').valign();
		$('.banner-takeover .item:nth-child(5) .valign').valign();
		$('.banner-takeover .item:nth-child(6) .valign').valign();
		$('.banner-takeover .item:nth-child(7) .valign').valign();
		$('.banner-takeover .item:nth-child(8) .valign').valign();
		$('.banner-takeover .item:nth-child(9) .valign').valign();
		$('.banner-takeover .item:nth-child(10) .valign').valign();
		
		// FLIP BOX
		$('.flip-box .front .valign').valign();
		$('.flip-box .back .valign').valign();
		$('.ajax_wrap .ajax_loading .loading').valign();
		$('.advanced-component.news-events-listing .item .valign').valign();

		// PARALLAX
		/*$('.item.parallax').parallax({
			speed : -0.75
		});*/
		
		$('.question-list .item .inner').matchHeight();
		$('.tick-list .item').matchHeight();
		
	});

	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    var expires = "expires=" + d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/;";
	}
	
	