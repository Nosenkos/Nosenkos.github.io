$(document).ready(function($) {
	$('.outer-menu > li a').on('click', function(event) {
		event.preventDefault();
		$('.inner-menu').toggle('slow');
	});
	$('.blog-block ul > li > a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
	});
});
