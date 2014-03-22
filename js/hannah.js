$(document).ready(function(){
	console.log('hannah has arrived!');

	$('h2.emphasis').hide();

	$('button.surprise').click(function(){
		$(this).fadeOut();
		$('h2.emphasis').delay(500).slideDown().fadeIn(1500);
	});
});

