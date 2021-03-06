
$(document).ready(function(){

	$('#openNav').click(function(openNavClick){/** Nav Click function***/
		$('#openNav').fadeOut('fast'); /*** Fades NAV***/
		$('#partialMenu').fadeOut('fast');
		$('#fullMenu').fadeIn('fast');
		$('nav').addClass('oldNav'); /*** Adds background image to desktop menu ***/
		$('body').css('background-color', 'rgba(0,0,0,0.8)');
		$('#wrapper').css('opacity', '0.5');
		$('.third-width p').css("margin-bottom", "5vh");
		/****** TABLET ******/
		$('head').append('<style type="text/css">@media all and (min-width: 768px) and (max-width:939px){ .nav { width: 100%} #wrapper{display: none}}</style>');
		/****** Desktop ******/
		$('head').append('<style type="text/css">@media screen and (min-width:940px){ .nav { width: 20%} #wrapper{margin-left: 0}}</style>');
	});

	var closeNav = $('#closeNav');
	function onClick(){
		$('#openNav').fadeIn("slow"); /*** Fades in burger menu ***/
		$('nav').removeClass('oldNav'); /*** removes background image ***/
		$('#partialMenu').fadeIn('fast'); /*** Adds small menu icons ***/
		$('#fullMenu').fadeOut('fast');
		$("#wrapper").removeAttr('style');
		$(".hero").removeAttr('style').css("transition", "1");
		$('#wrapper').removeClass("navGrid").addClass("gridLayout");
		$('.third-width p, #html, #about, .third-width, #spiritedAway, #samsung, body').removeAttr('style');
		$('#portDesc1, #portDesc2, #portDesc3, #portDesc4, #portDesc5').fadeIn('fast');
		/****** TABLET ******/
		$('head').append('<style type="text/css">@media all and (min-width: 768px) and (max-width:939px){ .nav {width: 0} #wrapper{display: contents}}</style>');
		/****** Desktop ******/
		$('head').append('<style type="text/css">@media screen and (min-width:940px){ .nav { width: 2.5vw} #wrapper{margin-left: 0%}}</style>');
	}
	closeNav.on('click', onClick);

	var openNavMobile = $('#openNavMobile');
	function openClickMobile(){/** Nav Click function***/
		$('.nav').css("width", "100%"); /*** decreases size of main page***/
		$('#wrapper').fadeOut(1000);
		/****** Phone ******/
	}
	openNavMobile.on('click', openClickMobile);

	var closeNavMobile = $('#closeNavMobile');
	function closeClickMobile(){/** Nav Click function***/
		$('.nav').css("width", "0"); /*** decreases size of main page***/
		$('#wrapper').fadeIn(1000);
		/****** Phone ******/
	}
	closeNavMobile.on('click', closeClickMobile);

/*** Close Menu when clicking on menu links (DESKTOP) ***/
	var linkClick = $('#fullMenu a');
 	linkClick = true;
	$('#fullMenu').click(function(){
		if (linkClick === true){
			onClick();
		}
	});

var linkClickMobile = $('#fullMenuMobile a');
linkClickMobile = true
$('#fullMenuMobile').click(function(){
		closeClickMobile();
});


});
