$(function() {

  $('#profile-pic').click(function(){
    $('img').animate({
      opacity: 0.4,
      marginLeft: "0.6in"
    }, 1500 );
  });

  $('#main h3').click(function(){
    $(this).css('background-color','aqua');
  });
});