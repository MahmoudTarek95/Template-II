/*jslint plusplus: true, evil: true */
/*global $, window*/

$(function () {
    
    'use strict';
    
    $("html").niceScroll({
        
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
        
    });
    
    $('.header').height($(window).height());
    
    $('.header .arrow i').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.features').offset().top
            
        }, 1000);
    });
    
    $('.hire').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.our-team').offset().top
            
        }, 1000);
        
    });
    $('.our').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.our-work').offset().top
            
        }, 1000);
        
    });
    
    $('.show').click(function () {
        $('.our-work .hidden').fadeIn(2000);
    });
    
    
    function checkClients() {
        
        
        if ($('.client:first').hasClass('active')) {
            
            $('.fa-chevron-left').fadeOut();
            
        } else {
            
            $('.fa-chevron-left').fadeIn();
            
        }
        if ($('.client:last').hasClass('active')) {
            
            $('.fa-chevron-right').fadeOut();
            
        } else {
            
            $('.fa-chevron-right').fadeIn();
            
        }
    }
    checkClients();

    $('.testimonials i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testimonials .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
            });
        } else {
            $('.testimonials .active').fadeOut(100, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
            });
            
        }
    });

});