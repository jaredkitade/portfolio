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
	});

	$('.clickoff').click(function(){
		hamburger.classList.toggle('is-active');
		$('.menu').toggleClass('open');
		$('.clickoff').toggleClass('open-clickoff');
		$('body').toggleClass('scroll');
		$('.all').toggleClass('body-menu');
	});
});	
