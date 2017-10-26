var $;

$(function() {
    
    $('body').fadeIn(1500);
    $('ul').slideUp(0);
    $('code').slideUp(0);
    
    $('.toggleSlide').on('click', function() {
      var elements = $(this).attr('data-toggleSlide');
      $(elements).slideToggle(700);
    });

}); 