$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
    } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
    }
});

$(document).ready(function(){
    $('.psd').animate({width:'90%'},2000);
    $('.il').animate({width:'75%'},2000);
    $('.html').animate({width:'60%'},2000);
    $('.js').animate({width:'50%'},2000);
});

var $grid = $('.portfolio-active').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  })
  
  $('.gallery').isotope({
    // options
    itemSelector: '.items'
  });
  
  var $gallery = $('.gallery').isotope({
    // options
  });
  
  // filter items on button click
  $('.filtering').on('click', 'span', function () {
  
    var filterValue = $(this).attr('data-filter');
  
    $gallery.isotope({
      filter: filterValue
    });
  
  });
  
  $('.filtering').on('click', 'span', function () {
  
    $(this).addClass('active').siblings().removeClass('active');
  
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
  });