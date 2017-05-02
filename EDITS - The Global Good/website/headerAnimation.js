$(function(){
    $('#header').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#header').data('size') == 'big')
        {
            $('#header').data('size','small');
            $('#header').stop().animate({
                height:'75px'
            },600);
        }
    }
    else
    {
        if($('#header').data('size') == 'small')
        {
            $('#header').data('size','big');
            $('#header').stop().animate({
                height:'125px'
            },600);
        }
    }
});
