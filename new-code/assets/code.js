$(document).ready(function(){

    // $('#menu-frame').load('hamburger.html'); 


	var hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('is-active');
	});

	$('.hamburger').click(function(){
		$('.menu').toggleClass('open');
		$('.menu-bottom').toggleClass('open');
		$('.clickoff').toggleClass('open-clickoff');
		$('body').toggleClass('scroll');
		$('.all').toggleClass('body-menu');
		$('.project-right').toggleClass('body-menu');
		$('.menu-title').toggleClass('menu-title-active');
	});

	$('.clickoff').click(function(){
		hamburger.classList.toggle('is-active');
		$('.menu').toggleClass('open');
		$('.menu-bottom').toggleClass('open');
		$('.clickoff').toggleClass('open-clickoff');
		$('body').toggleClass('scroll');
		$('.all').toggleClass('body-menu');
		$('.menu-title').toggleClass('menu-title-active');
	});

	$('.featured span').click(function(){
		$('.featured-sub-menu').toggleClass('show-sub-menu');
		$('.featured').find('.arrow-top1').toggleClass('flip-off');
		$('.featured').find('.arrow-bottom1').toggleClass('flip-off');
		$('.featured').find('.arrow-top2').toggleClass('flip-on');
		$('.featured').find('.arrow-bottom2').toggleClass('flip-on');
		$(this).toggleClass('menu-selected');

	});

	$('.drawing span').click(function(){
		$('.drawing-sub-menu').toggleClass('show-sub-menu');
		$('.drawing').find('.arrow-top1').toggleClass('flip-off');
		$('.drawing').find('.arrow-bottom1').toggleClass('flip-off');
		$('.drawing').find('.arrow-top2').toggleClass('flip-on');
		$('.drawing').find('.arrow-bottom2').toggleClass('flip-on');
		$(this).toggleClass('menu-selected');
	});

	$('.design span').click(function(){
		$('.design-sub-menu').toggleClass('show-sub-menu');
		$('.design').find('.arrow-top1').toggleClass('flip-off');
		$('.design').find('.arrow-bottom1').toggleClass('flip-off');
		$('.design').find('.arrow-top2').toggleClass('flip-on');
		$('.design').find('.arrow-bottom2').toggleClass('flip-on');
		$(this).toggleClass('menu-selected');
	});


	$('.featured svg').click(function(){
		$('.featured-sub-menu').toggleClass('show-sub-menu');
		$('.featured').find('.arrow-top1').toggleClass('flip-off');
		$('.featured').find('.arrow-bottom1').toggleClass('flip-off');
		$('.featured').find('.arrow-top2').toggleClass('flip-on');
		$('.featured').find('.arrow-bottom2').toggleClass('flip-on');
		$('.featured span').toggleClass('menu-selected');
	});

	$('.drawing svg').click(function(){
		$('.drawing-sub-menu').toggleClass('show-sub-menu');
		$('.drawing').find('.arrow-top1').toggleClass('flip-off');
		$('.drawing').find('.arrow-bottom1').toggleClass('flip-off');
		$('.drawing').find('.arrow-top2').toggleClass('flip-on');
		$('.drawing').find('.arrow-bottom2').toggleClass('flip-on');
		$('.drawing span').toggleClass('menu-selected');
	});

	$('.design svg').click(function(){
		$('.design-sub-menu').toggleClass('show-sub-menu');
		$('.design').find('.arrow-top1').toggleClass('flip-off');
		$('.design').find('.arrow-bottom1').toggleClass('flip-off');
		$('.design').find('.arrow-top2').toggleClass('flip-on');
		$('.design').find('.arrow-bottom2').toggleClass('flip-on');
		$('.design span').toggleClass('menu-selected');
	});

	var logo = [
	  'assets/logos/planeta.gif',
	  'assets/logos/domaine.gif',
	  'assets/logos/bodoni.gif',
	  'assets/logos/din.gif'
	];

	var size = logo.length
	var x = Math.floor(size*Math.random())
	document.getElementById('logo-image').src=logo[x];

});	
