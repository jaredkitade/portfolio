$(document).ready(function(){

	$(function(){
    	$('#hamburger-menu').load('hamburger.html'); 
    });


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

	$('#hamburger-menu > .featured span').click(function(){
		$('#hamburger-menu > .featured-sub-menu').toggleClass('show-sub-menu');
		$('#hamburger-menu > .featured').find('.arrow-top1').toggleClass('flip-off');
		$('#hamburger-menu > .featured').find('.arrow-bottom1').toggleClass('flip-off');
		$('#hamburger-menu > .featured').find('.arrow-top2').toggleClass('flip-on');
		$('#hamburger-menu > .featured').find('.arrow-bottom2').toggleClass('flip-on');
		$(this).toggleClass('menu-selected');

	});

	$('#hamburger-menu > .drawing span').click(function(){
		$('#hamburger-menu > .drawing-sub-menu').toggleClass('show-sub-menu');
		$('#hamburger-menu > .drawing').find('.arrow-top1').toggleClass('flip-off');
		$('#hamburger-menu > .drawing').find('.arrow-bottom1').toggleClass('flip-off');
		$('#hamburger-menu > .drawing').find('.arrow-top2').toggleClass('flip-on');
		$('#hamburger-menu > .drawing').find('.arrow-bottom2').toggleClass('flip-on');
		$(this).toggleClass('menu-selected');
	});

	$('#hamburger-menu > .design span').click(function(){
		$('#hamburger-menu > .design-sub-menu').toggleClass('show-sub-menu');
		$('#hamburger-menu > .design').find('.arrow-top1').toggleClass('flip-off');
		$('#hamburger-menu > .design').find('.arrow-bottom1').toggleClass('flip-off');
		$('#hamburger-menu > .design').find('.arrow-top2').toggleClass('flip-on');
		$('#hamburger-menu > .design').find('.arrow-bottom2').toggleClass('flip-on');
		$(this).toggleClass('menu-selected');
	});


	$('#hamburger-menu > .featured svg').click(function(){
		$('#hamburger-menu > .featured-sub-menu').toggleClass('show-sub-menu');
		$('#hamburger-menu > .featured').find('.arrow-top1').toggleClass('flip-off');
		$('#hamburger-menu > .featured').find('.arrow-bottom1').toggleClass('flip-off');
		$('#hamburger-menu > .featured').find('.arrow-top2').toggleClass('flip-on');
		$('#hamburger-menu > .featured').find('.arrow-bottom2').toggleClass('flip-on');
		$('#hamburger-menu > .featured span').toggleClass('menu-selected');
	});

	$('#hamburger-menu > .drawing svg').click(function(){
		$('#hamburger-menu > .drawing-sub-menu').toggleClass('show-sub-menu');
		$('#hamburger-menu > .drawing').find('.arrow-top1').toggleClass('flip-off');
		$('#hamburger-menu > .drawing').find('.arrow-bottom1').toggleClass('flip-off');
		$('#hamburger-menu > .drawing').find('.arrow-top2').toggleClass('flip-on');
		$('#hamburger-menu > .drawing').find('.arrow-bottom2').toggleClass('flip-on');
		$('#hamburger-menu > .drawing span').toggleClass('menu-selected');
	});

	$('#hamburger-menu > .design svg').click(function(){
		$('#hamburger-menu > .design-sub-menu').toggleClass('show-sub-menu');
		$('#hamburger-menu > .design').find('.arrow-top1').toggleClass('flip-off');
		$('#hamburger-menu > .design').find('.arrow-bottom1').toggleClass('flip-off');
		$('#hamburger-menu > .design').find('.arrow-top2').toggleClass('flip-on');
		$('#hamburger-menu > .design').find('.arrow-bottom2').toggleClass('flip-on');
		$('#hamburger-menu > .design span').toggleClass('menu-selected');
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
