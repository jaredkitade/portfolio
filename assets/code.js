$(document).ready(function(){

    $('.menu-frame').load('hamburger.html');
    $('.nav-frame').load('nav-bar.html');


	$('.caption-button').click(function(){
		$(this).toggleClass('caption-expand');
		$(this).find('div').toggleClass('caption-hidden');
		$(this).find('div').toggleClass('caption-visible');
		$(this).find('div').toggleClass('visible');
		$(this).find('div').toggleClass('hidden');
		$(this).find('.plus-v').toggleClass('spin');
		$(this).find('.plus-h').toggleClass('spin-far');
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if (scroll >= 200) {
			$('.scroll-wrap').addClass('scroll-fade');
		}
		// else {
		// 	$('.scroll-wrap').removeClass('scroll-fade');
		// }

	});

	$('.scroll-wrap').click(function(){
		// $(this).css('pointer-events', 'none')
		$('html, body').animate({
			scrollTop: window.pageYOffset + $(window).height()}, 1000);
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if (scroll >= 800) {
			$('.scroll-top-wrap').removeClass('scroll-fade-top');
		}
		else {
			$('.scroll-top-wrap').addClass('scroll-fade-top');
		}

	});

	$('.scroll-top-wrap').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	});


	// var logo = [
	//   'assets/logos/planeta.gif',
	//   'assets/logos/domaine.gif',
	//   'assets/logos/bodoni.gif',
	//   'assets/logos/din.gif'
	// ];

	// var size = logo.length
	// var x = Math.floor(size*Math.random())
	// document.getElementById('logo-image').src=logo[x];


	var photo = [
		'assets/images/about/wave.jpg',
		'assets/images/about/lion.jpg',
		'assets/images/about/ice-cream.jpg',
		'assets/images/about/look.jpg',
		'assets/images/about/jeff.jpg',
		'assets/images/about/shine.jpg',
		'assets/images/about/beard.jpg'
	];

	var size = photo.length
	var y = Math.floor(size*Math.random())
	document.getElementById('about-image').src=photo[y];


});	
