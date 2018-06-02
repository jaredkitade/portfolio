$(document).ready(function(){
	var hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('is-active');
	});

	$('.hamburger').click(function(){
		$('.menu').toggleClass('open');
		$('.clickoff').toggleClass('open-clickoff');
		$('body').toggleClass('scroll');
		$('.all').toggleClass('body-menu');
		$('.project-right').toggleClass('body-menu');
		$('.menu-title').toggleClass('menu-title-active');
	});

	$('.clickoff').click(function(){
		hamburger.classList.toggle('is-active');
		$('.menu').toggleClass('open');
		$('.clickoff').toggleClass('open-clickoff');
		$('body').toggleClass('scroll');
		$('.all').toggleClass('body-menu');
		$('.menu-title').toggleClass('menu-title-active');
	});

	$('.featured').click(function(){
		$('.featured-sub-menu').toggleClass('show-sub-menu');
		$(this).find('.arrow-top1').toggleClass('flip-off');
		$(this).find('.arrow-bottom1').toggleClass('flip-off');
		$(this).find('.arrow-top2').toggleClass('flip-on');
		$(this).find('.arrow-bottom2').toggleClass('flip-on');
	});

	$('.drawing').click(function(){
		$('.drawing-sub-menu').toggleClass('show-sub-menu');
		$(this).find('.arrow-top1').toggleClass('flip-off');
		$(this).find('.arrow-bottom1').toggleClass('flip-off');
		$(this).find('.arrow-top2').toggleClass('flip-on');
		$(this).find('.arrow-bottom2').toggleClass('flip-on');
	});

	$('.design').click(function(){
		$('.design-sub-menu').toggleClass('show-sub-menu');
		$(this).find('.arrow-top1').toggleClass('flip-off');
		$(this).find('.arrow-bottom1').toggleClass('flip-off');
		$(this).find('.arrow-top2').toggleClass('flip-on');
		$(this).find('.arrow-bottom2').toggleClass('flip-on');
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
