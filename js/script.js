$(document).ready(function() {
    
    //slider arrows
    $('.leftarrow_click').css('opacity', '0.5').fadeIn(500);
    setTimeout(function(){ $(".leftarrow_click").css("opacity", ""); },600);

    $('.rightarrow_click').css('opacity', '0.5').fadeIn(500);
    setTimeout(function(){ $(".rightarrow_click").css("opacity", ""); },600);
    

    //jeans item red border
    $('.window').mouseenter(function(){
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
    })
    

    //arrow click totop
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

    //footer logo click to top
    $('.logo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    
    //please scroll to bottom
    setTimeout(function(){ $('#scrolltobottom').css('opacity', '0.8').fadeIn(600); },2300);
    setTimeout(function(){ $("#scrolltobottom").css("opacity", "").fadeOut(600); },3300);

    //dropdown menu
    setTimeout(function(){
        $('.dropdown').mouseleave(function(){
            $('.dropdown, .dropdown-contact').css('display', 'none').fadeOut(500);
        })
    },500)
    $('.menu').mouseleave(function(){
        $('.dropdown, .dropdown-contact').css('display', 'none').fadeOut(500);
    })
    
    
    
    $('#home').mouseenter(function(){
        $('.dropdown').css({'left' : '40px', 'display' : 'block'});
        $('.dropdown-contact').css('display', 'none');
    })
    $('#products').mouseenter(function(){
        $('.dropdown').css({'left' : '127.5px', 'display' : 'block'});
        $('.dropdown-contact').css('display', 'none');
    })
    $('#shopping').mouseenter(function(){
        $('.dropdown').css({'left' : '239.5px', 'display' : 'block'});
        $('.dropdown-contact').css('display', 'none');
    })
    $('#contacts').mouseenter(function(){
        $('.dropdown-contact').css({'left' : '363.5px', 'display' : 'block'}).fadeIn(500);
        $('.dropdown').css('display', 'none');
    })


    $('.menu li').mouseenter(function(){
        $(this).css({'color' : '#fff', 'background-color' : '#cf1a2b'})
        $(this).siblings().css({'color' : '', 'background-color' : ''})
    })
    $('.dropdown, .dropdown-contact').mouseleave(function(){
        $('.menu li').css({'color' : '', 'background-color' : ''})
    })

    $('main').mouseenter(function(){
        $('.menu li').css({'color' : '', 'background-color' : ''})
    })

    
    
    new WOW().init();
});