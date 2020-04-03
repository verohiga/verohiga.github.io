$(function() {
    $('.chart').easyPieChart({
        barColor:'#6dbe45',
        scaleColor: false,
        lineWidth: 10,
        trackColor: '#1f1933',
        animate: 2000,
    });
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
    } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
    }
});

AOS.init({
    easing:'ease-out-back',
});
