$(document).ready(function (){
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-nav .nav-link').on('click', function(){
        $(".menu-toggler").removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href+="#"]').on('click', function(){
        $('html, body').animate(Keyframes, {
            scrollTop:$($(this).attr('href')).offset().top - 100
        }, options, 2000);
    });
    $('#up').on('click', function(){
        $('html, body').animate(Keyframes, {
            scrollTop:0
        }, Options, 2000);
    });
//for now cant fanthom the error at the keyframes and option part
AOS.init({
    easing: 'ease',
    duration: 1800
});
});