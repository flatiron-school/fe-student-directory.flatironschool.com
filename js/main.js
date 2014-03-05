$(window).on('load', function(){

  var $container = $('#students');
  // initialize
  $container.masonry({
    itemSelector: '.student'
  });
});