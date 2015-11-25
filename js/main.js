$('.sec1').on('click', function(){
  $('.one').addClass('expand');
  $('.two').removeClass('expand');
  $('.three').removeClass('expand');
});

$('.sec2').on('click', function(){
  $('.two').addClass('expand');
  $('.one').removeClass('expand');
  $('.three').removeClass('expand');
});

$('.sec3').on('click', function(){
  $('.three').addClass('expand');
  $('.one').removeClass('expand');
  $('.two').removeClass('expand');
});


// Tim's example - uses 'this' to refer to what the event happened on (h2)
// $('section:not(:first)').addClass('hidden');
// $('.accordion').on('click', 'h2', function(){
//   $(this).parent().removeClass('hidden').siblings().addClass('hidden');
// });

// Link to example: http://codepen.io/twhitacre/pen/PPmLbP?editors=011