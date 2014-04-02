$(document).ready(function(){


if ($(window).width() > 700) {

	$('img').delay(5000).fadeIn(5000);
	$('img').css({'border-color':'orange'})
	$('img').delay(1000).fadeOut(5000);
	$('img').css({'border-color':'red'});
	$('img').fadeIn(5000);
	$('img').css({'border-style':'dotted'});
	$('img').css({'border-color':'lightblue'});

} else if ($(window).width() < 600) {
		$('img').css({'border':'none'});
		$('img').css({'border-width':'0px'});
		$('img').css({'border-style':'none'});
};


});




