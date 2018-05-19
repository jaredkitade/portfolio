$(document).ready(function(){
	var hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", function() {
		hamburger.classList.toggle("is-active");
	});

	$('.hamburger').click(function(){
		$('.menu').toggleClass("open");
	});
});	
