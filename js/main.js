$(document).ready(function(){
	
	
	$('#openNav').click(function(){/** Nav Click function***/
		$('#openNav').fadeOut('fast'); /*** Fades NAV***/
		$('#partialMenu').fadeOut('fast');
		$('#fullMenu').fadeIn('fast');
		$('nav').addClass('oldNav'); /*** Adds background image to desktop menu ***/
		$('body').css('background-color', 'rgba(0,0,0,0.8)');
		$('#wrapper').css('opacity', '0.5');
		/***$('.smallNav').fadeOut(50); /*** Removes triangle menu ***/
		/**$('#wrapper').removeClass("gridLayout").addClass("navGrid");
		/**$('.hero').fadeOut("fast");  REMOVES HERO**/
		/**$('.third-width p, .third-width h3').css({"text-align": "center", "margin-top": "2.5vh", "padding-left": "0.5vw" });**/
		$('svg').css('display', 'block');
		$('.third-width p').css("margin-bottom", "5vh");
		/**$('#html').css("margin-top", "1vh");**/
		$('#about').css({"margin-top": "5vh", "margin-bottom": "5vh", 'margin-left': '0'});
		/**$('.third-width').css({"width": "50vw", "height": "50vh", "margin-left": "15%"});**/
		/**$('.third-width2').css( {"margin-bottom": "10vh", "border": "none"});
		$('#portDesc1, #portDesc2, #portDesc3, #portDesc4, #portDesc5').fadeOut();
		$('#spiritedAway, #samsung').css({"padding": "30vh 0 10vw 0", "margin": "0 25vh"});***/
		/****** TABLET ******/
		$('head').append('<style type="text/css">@media all and (min-width: 768px) and (max-width:939px){ .nav { width: 100%} #wrapper{display: none}}</style>');
		/****** Desktop ******/
		$('head').append('<style type="text/css">@media screen and (min-width:940px){ .nav { width: 20%} #wrapper{margin-left: 0} #about{width: 95%}}</style>');
		
		
	
		
		
	});
	
	$('#openNavMobile').click(function(){/** Nav Click function***/
		$('.nav').css("width", "100%"); /*** decreases size of main page***/
		$('#wrapper').fadeOut(1000);	
		/****** Phone ******/	
		
	});
	
	
	$('#closeNav').click(function(){
		$('#openNav').fadeIn("slow"); /*** Fades in burger menu ***/
		$('nav').removeClass('oldNav'); /*** removes background image ***/
		/**$('.smallNav').fadeIn(50); /*** Adds triangle ***/
		$('#partialMenu').fadeIn('fast'); /*** Adds smal menu icons ***/
		$('#fullMenu').fadeOut('fast');
		$("#wrapper").removeAttr('style');
		$(".hero").removeAttr('style').css("transition", "1");
		$('#wrapper').removeClass("navGrid").addClass("gridLayout");
		$('.third-width p, #html, #about, .third-width, #spiritedAway, #samsung, body').removeAttr('style');
		$('svg').css('display', 'none');
		$('#portDesc1, #portDesc2, #portDesc3, #portDesc4, #portDesc5').fadeIn('fast');
		/****** TABLET ******/
		$('head').append('<style type="text/css">@media all and (min-width: 768px) and (max-width:939px){ .nav {width: 0} #wrapper{display: contents}}</style>');
		/****** Desktop ******/
		$('head').append('<style type="text/css">@media screen and (min-width:940px){ .nav { width: 2.5vw} #wrapper{margin-left: 0%} #about{width: 100%}}</style>');
		/****** Not Sure if I need it or not
		$('head').append('<style type="text/css">{ .nav { width: 0} #wrapper{display: contents} }</style>');******/
	});
	
	$('#closeNavMobile').click(function(){/** Nav Click function***/
		$('.nav').css("width", "0"); /*** decreases size of main page***/
		$('#wrapper').fadeIn(1000);	
		/****** Phone ******/	
		
	});
	
	
	$(window).scroll(function() {

    if ($(window).scrollTop()>400)
     {
        $('.aboutP').fadeTo("slow", 1);
     }	
			
		});
	
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
	 if (scrollTop > $("#about").offset().top)
     {
		 $('#fullMenu nav a').css("color", "#d79292");
		 /*$('nav').css('background-image', 'linear-gradient(rgba(215, 146, 146, 0.5), rgba(50, 150, 250, 0.5))');*/
		 $('#about').css({'margin-bottom': '-69%', 'transition': '5s'});
		 $('#about').addClass('drip');
		 $('.skills').fadeIn(1000);
     }
		
		
	else {
		$('#fullMenu nav a').css("color", "#fff");
		/*$('nav').css('background-image', 'linear-gradient(rgba(50, 150, 250, 0.5), rgba(215, 146, 146, 0.5))');*/
		$('#about').css({'margin-bottom': '3%', 'transition': '3s', });
		$('.skills').fadeOut(900);
		 $('#about').removeClass('drip');
	}
	});
	
	
	
});

	
