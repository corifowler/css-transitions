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