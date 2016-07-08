$(document).ready(function(){
	var cart = 0;

	$('.mid-menu .price #green-click').on('click', function() {
		/* Act on the event */

		if ($( '#green-click' ).prop( "checked" )) {
			$('.device').each(function() {
				$(this).css('border-color', 'green');
			});
		}
		else	{
			$('.device').each(function() {
				$(this).css('border-color', 'white');
			});
		}
	});

	$('.shop-menu .cart span').html(cart);
	$('.device .btn').on('click', function(e) {
		e.preventDefault();
		cart += parseFloat($(this).siblings('.d_price').text());
		$('.shop-menu .cart span').html(cart.toFixed(2));
	});

	$('#top_menu').on('click', function(){
	$('.var-menu').toggleClass('show');
	});


	$('.outer > li').on('click', function(e){
		e.preventDefault();
		if ($(this).children('ul').hasClass('inner')) {
			$(this).children('ul').toggleClass('show'); 	
			$(this).children('a').children('img').toggleClass('opened');
		}
	});
});
