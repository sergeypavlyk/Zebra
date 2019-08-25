$(document).ready(function() {
    
    

    // $('.leftarrow').hover(function() {
    //     $('.leftarrow_click').addClass('active').fadeIn(500);
    //     event.stopPropagation();
    // },function(){
    //     $('.leftarrow_click').fadeOut(500);
    // });
    // $('.rightarrow').hover(function() {
    //     $('.rightarrow_click').addClass('active').fadeIn(500);
    // },function(){
    //     $('.rightarrow_click').fadeOut(500);
    // });

    $('.leftarrow_click').css('opacity', '0.5').fadeIn(500);
    setTimeout(function(){ $(".leftarrow_click").css("opacity", ""); },600);

    $('.rightarrow_click').css('opacity', '0.5').fadeIn(500);
    setTimeout(function(){ $(".rightarrow_click").css("opacity", ""); },600);
    

    
    
    new WOW().init();
});