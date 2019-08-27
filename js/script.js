$(document).ready(function() {
    

    $('.leftarrow_click').css('opacity', '0.5').fadeIn(500);
    setTimeout(function(){ $(".leftarrow_click").css("opacity", ""); },600);

    $('.rightarrow_click').css('opacity', '0.5').fadeIn(500);
    setTimeout(function(){ $(".rightarrow_click").css("opacity", ""); },600);
    
    $('.window').mouseenter(function(){
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
    })
    

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1400) {
            $('#scroller').fadeIn(500);
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $('.logo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    

    setTimeout(function(){ $('#scrolltobottom').css('opacity', '0.8').fadeIn(600); },1500);
    setTimeout(function(){ $("#scrolltobottom").css("opacity", "").fadeOut(600); },3000);
    
    
    new WOW().init();
});