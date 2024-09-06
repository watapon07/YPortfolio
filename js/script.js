$(function(){
    
  $('.slider').slick({
      autoplay:true,
      dots:false,
      autoplaySpeed:3800,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      pauseOnHover: false,
      arrows:false,
    });

    $('.slideshow').slick({
        autoplay:true,
        dots:false,
        autoplaySpeed:5000,
        infinite:true,
        fade:true,
        speed:3500,
        pauseOnHover: false,
    });
    
    $('.animation01').css('visibility', 'hidden');
    $(window).scroll(function () {
      var windowHeight = $(window).height(),
        scrollRyou = $(window).scrollTop();
      $('.animation01').each(function () {
        var targetPosition = $(this).offset().top;
        if (scrollRyou > targetPosition - windowHeight + 100) {
          $(this).addClass("fadeup");
        }
      });
    });
});