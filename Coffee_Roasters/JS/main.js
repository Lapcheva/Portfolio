$(document).ready(function() {
    $('.testimonials-carousel').slick(
        {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        }
    );

    $(document).ready(function() {
        $('.navigation-button').click(function (e) { 
            $('.main-navigation-list').toggleClass('active');
            $('.main-wrapper').toggleClass('dark-background');

            
        });
    })
});