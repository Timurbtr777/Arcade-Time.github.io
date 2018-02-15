$(function() {
    jQuery.scrollSpeed(100, 1000, 'easeOutCubic');
})

/*$(document).ready(function(){
var widthWindow = $(window).width();
var imageMenu = $('.adaptiv_menu').css({'float' : 'right', 'margin' : '1rem 2rem 0rem 0rem', 'position' : 'relative', 'z-index': 99}).hide();
if(widthWindow <= 480) {
$('.zagl,.right,.left').remove();
$('.Navigation').append('<ul><li><a>Услуги</a></li><li><a>Портфолио</a></li><li><a>О нас</a></li><li><a>Контакты</a></li></ul>');
$('.Navigation ').css({
  'justify-content' : 'flex-start'
});
$('.Navigation ul').css({
  'display' : 'flex',
  'flex-flow' : 'column nowrap',
  'justify-content' :'flex-start',
  'position' : 'absolute',
  'margin-top' : '5rem'
});
$('.Navigation ul li a').css({
  'font-size' : '2rem',
  'margin-bottom' : '2rem',
  'margin-right' : '5rem'
});
$('.Navigation ul').hide();
  imageMenu.show();

}
imageMenu.on('click', function(){
$('.Navigation ul').slideToggle();
});
});*/
