$(document).ready(function(){
	
	
	$('#openNav').click(function(){/** Nav Click function***/
		$('#openNav').fadeOut("slow"); /*** Fades NAV***/
		$('#wrapper').css("margin-left", "50%"); /*** decreases size of main page***/
		$('#wrapper').removeClass("gridLayout").addClass("navGrid");
		$('.hero').fadeOut("fast");
		$('.third-width p, .third-width h3').css({"text-align": "center", "margin-top": "7vh", "padding-left": "0.5vw" });
		$('.third-width p').css("margin-bottom", "20vh");
		$('#html').css("margin-top", "20vh");
		$('#about').css({"margin-top": "5vh", "margin-bottom": "5vh"});
		$('.third-width').css({"width": "50vw", "height": "50vh", "margin": "0"});
		$('.third-width2').css( "margin-bottom", "10vh");
		$('#spiritedAway, #samsung').css({"padding": "30vh 0 10vw 0", "margin": "0 25vh"});
		/****** TABLET ******/
		$('head').append('<style type="text/css">@media all and (min-width: 768px) and (max-width:939px){ .nav { width: 100%} #wrapper{display: none}}</style>');
		/****** Desktop ******/
		$('head').append('<style type="text/css">@media only screen and (min-width:940px){ .nav { width: 50%} }</style>');
		/****** Phone ******/
		
	
		
		
	});
	
	$('#openNavMobile').click(function(){/** Nav Click function***/
		$('.nav').css("width", "100%"); /*** decreases size of main page***/
		$('#wrapper').fadeOut(1000);	
		/****** Phone ******/	
		
	});
	
	
	$('#closeNav').click(function(){
		$('#openNav').fadeIn("slow");
		$("#wrapper").removeAttr('style');
		$(".hero").removeAttr('style').css("transition", "1");
		$('#wrapper').removeClass("navGrid").addClass("gridLayout");
		$('.third-width p, #html, #about, .third-width, #spiritedAway, #samsung').removeAttr('style');
		/****** TABLET ******/
		$('head').append('<style type="text/css">@media all and (min-width: 768px) and (max-width:939px){ .nav {width: 0} #wrapper{display: contents}}</style>');
		/****** Desktop ******/
		$('head').append('<style type="text/css">@media only screen and (min-width:940px){ .nav { width: 0} }</style>');
		/****** Phone ******/
		$('head').append('<style type="text/css">{ .nav { width: 0} #wrapper{display: contents} }</style>');
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
	 if (scrollTop > $("#html").offset().top)
     {
		 $('.nav').css("background-color", "rgba(255, 255, 255, 0.8)");
		 $('nav a').css("color", "#d79292");
     }

		
	else {
		$('.nav').css("background-color", "rgba(34, 72, 106, 0.8)");
		$('nav a').css("color", "#fff");
	}
	});
	
	
	
});

	
