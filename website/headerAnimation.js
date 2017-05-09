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
                height:'10vh'
            },600);
        }
    }
    else
    {
        if($('#header').data('size') == 'small')
        {
            $('#header').data('size','big');
            $('#header').stop().animate({
                height:'20vh'
            },600);
        }
    }
});




$(function(){
    $('#contentid').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#contentid').data('size') == 'big')
        {
            $('#contentid').data('size','small');
            $('#contentid').stop().animate({
                top:'10vh'
            },600);
        }
    }
    else
    {
        if($('#contentid').data('size') == 'small')
        {
            $('#contentid').data('size','big');
            $('#contentid').stop().animate({
                top:'20vh'
            },600);
        }
    }
});
