$(function(){

    'use strict';

    var winH = $(window).height(),
        navBarH = $('.upper-bar').innerHeight(),
        mainNavH = $('.main-navbar').innerHeight();

    $('.main-slider, .carousel-item').height(winH - (navBarH + mainNavH) ) 


    // Shuffle elements

    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') == 'all'){
            $('.shuffle-images .col-md').css('opacity', '1')
        } else {
           $('.shuffle-images .col-md').css('opacity', '.2');
           $($(this).data('class')).css('opacity', '1')

        }
    })

    //Add STicky navbar on SCroll 

    $(window).on('scroll', function(){
        if($(window).scrollTop() > $('.upper-bar').innerHeight()){
            $('.main-navbar').css({
                'position': 'fixed',
                'top': 0,
                'left' :0,
                'opacity': '.8'
            })
        }else{
            $('.main-navbar').css('position', 'unset')
        }
    })
})

    $('.carousel').carousel({
        interval: 1800
    })