<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>ared Kitade</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="//fast.fonts.net/jsapi/9fed162e-fca2-4291-b51c-42d1c1f922e4.js"></script>
	<link rel="shortcut icon" type="img/png" href="images/favicon.ico">
</head>
<body>
	<?php include 'page-head.html'; ?>
	<div class='clear'></div>
	<div class='page-content'>

		<div class='projects'>
		
			
			<div class='thumbnail'>
				<a href='sound-pack.html'>
					<img src='images/home/sp-cover.jpg'>
					<!-- <div class='overlay'>
						<img src='images/sp-cover.jpg'>
					</div> -->
					<div class='info'>
						<h2>Sound Pack Covers<h2>
						<div class='project-description'>Design</div>
					</div>
				</a>
			</div>

			<div class='thumbnail'>
				<a href='mdes-showcase.html'>
					<!-- <img src=''> -->
					<div class='thumbnail-img'></div>
					<div class='info'>
						<h2>MDES Showcase<h2>
						<div class='project-description'>Poster/System Design</div>
					</div>
				</a>
			</div>

			<div class='thumbnail three'>
				<a href='remotely-remote.html'>
					<img src='images/home/remote.gif'>
					<div class='info'>
						<h2>Remotely Remote<h2>
						<div class='project-description'>Web Design</div>
					</div>
				</a>
			</div>


			<div class='thumbnail'>
				<a href='cosplay.html'>
					<!-- <img src=''> -->
					<div class='thumbnail-img'></div>
					<div class='info'>
						<h2>Cosplay<h2>
						<div class='project-description'>System Design</div>
					</div>
				</a>
			</div>

			<div class='thumbnail'>
				<a href='motion-to-still.html'>
					<!-- <img src=''> -->
					<img src='images/home/a2.gif'>
					<div class='info'>
						<h2>Motion to Still<h2>
						<div class='project-description'>Animation/Web Design</div>
					</div>
				</a>
			</div>

			<div class='thumbnail three'>
				<a href='concept.html'>			
					<img src='images/home/concept2.gif'>
					<!-- <div class='thumbnail-img'></div> -->			
					<div class='info'>
						<h2>Concept Lecture Series<h2>
						<div class='project-description'>Web Design</div>
					</div>
				</a>
			</div>

			<div class='thumbnail'>
				<a href='nfl-timeline.html'>
					<!-- <img src=''> -->
					<div class='thumbnail-img'></div>			
					<div class='info'>
						<h2>NFL Timeline<h2>
						<div class='project-description'>Infographic Design</div>
					</div>
				</a>	
			</div>		
			<div class='thumbnail'>
				<a href='bjork.html'>
					<!-- <img src=''> -->
					<img src='images/home/bjork.jpg'>
<!-- 					<div class='thumbnail-img'></div>			
 -->					<div class='info'>
						<h2>Bjork: This Is How I'm Feeling<h2>
						<div class='project-description'>Exhibition Design</div>
					</div>
				</a>
			</div>
		<div class='clear'></div>
		<hr>
		<div class='rule'>
			<!-- <img id='bottom-rule-image'> -->
			<img src='images/rule.gif'>
		</div>
		</div>
		<?php include 'footer.html'; ?>
	</div>
</body>
<script>
	var logo = [
	  'images/logo.png',
	  'images/logo-red.png',
	  'images/logo-blue.png',
	  'images/logo-purple.png',
	  'images/logo-orange.png',
	  'images/logo-pink.png',
	  'images/logo-green.png'
	];

	var size = logo.length
	var x = Math.floor(size*Math.random())
	document.getElementById('logo-image').src=logo[x];

	var rule = [
	  'images/rule.jpg',
	  'images/rule-red.jpg',
	  'images/rule-blue.jpg',
	  'images/rule-purple.jpg',
	  //'images/rule-orange.jpg',
	  'images/rule-pink.jpg'//,
	  // 'images/rule-green.jpg',
	];

	var size = rule.length
	var x = Math.floor(size*Math.random())
	document.getElementById('rule-image').src=rule[x];
</script>
</html>



