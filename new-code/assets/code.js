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

	var logo = [
	  // 'assets/logos/j-domaine-1.svg',
	  // 'assets/logos/j-domaine-2.svg',
	  // 'assets/logos/j-domaine-3.svg',
	  // 'assets/logos/j-domaine-4.svg',
	  // 'assets/logos/j-domaine-5.svg',
	  // 'assets/logos/j-domaine-6.svg',
	  // 'assets/logos/j-domaine-7.svg',
	  // 'assets/logos/j-domaine-8.svg',
	  // 'assets/logos/j-din-1.svg',
	  // 'assets/logos/j-din-2.svg',
	  // 'assets/logos/j-din-3.svg',
	  // 'assets/logos/j-din-4.svg',
	  // 'assets/logos/j-din-5.svg',
	  // 'assets/logos/j-din-6.svg',
	  // 'assets/logos/j-din-7.svg',
	  // 'assets/logos/j-din-8.svg',
	  // 'assets/logos/j-bodoni-1.svg',
	  // 'assets/logos/j-bodoni-2.svg',
	  // 'assets/logos/j-bodoni-3.svg',
	  // 'assets/logos/j-bodoni-4.svg',
	  // 'assets/logos/j-bodoni-5.svg',
	  // 'assets/logos/j-bodoni-6.svg',
	  // 'assets/logos/j-bodoni-7.svg',
	  // 'assets/logos/j-bodoni-8.svg',
	  // 'assets/logos/j-planeta-1.svg',
	  // 'assets/logos/j-planeta-2.svg',
	  // 'assets/logos/j-planeta-3.svg',
	  // 'assets/logos/j-planeta-4.svg',
	  // 'assets/logos/j-planeta-5.svg',
	  // 'assets/logos/j-planeta-6.svg',
	  // 'assets/logos/j-planeta-7.svg',
	  // 'assets/logos/j-planeta-8.svg'
	  'assets/logos/planeta.gif',
	  'assets/logos/domaine.gif',
	  'assets/logos/bodoni.gif',
	  'assets/logos/din.gif'
	];

	var size = logo.length
	var x = Math.floor(size*Math.random())
	document.getElementById('logo-image').src=logo[x];

});	
