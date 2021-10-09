// preloader
$(window).on('load', function () {
    $('.preloader').fadeOut();
});

// Fixed Header
$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
    if (scroll >= 200) sticky.addClass('fixed-top');
    else sticky.removeClass('fixed-top');
});

// Color Select
jQuery(document).ready(function(){
    jQuery('.colorSec .item').click(function(event){
        jQuery('.selected').removeClass('selected');
        jQuery(this).addClass('selected');   
        event.preventDefault();
    });
});

// Count
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

// Slider
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        items: 1,
        slideSpeed: 2000,
        autoplay: true,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });
});











