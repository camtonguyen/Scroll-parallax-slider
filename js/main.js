$(document).ready(function(){ 
			$('.carousel').slick({
			    dots: true,
	            arrows: false,
	            speed: 700,
	            fade: true,
	            autoplay: true,
	    		autoplaySpeed: 5000,
	            cssEase: 'linear',
	            pauseOnHover: false,
	            autoplay: true,
	    		slidesToScroll: 1
			});
			$('.carousel').on('afterChange', function(event, slick, currentSlide){
	            $('.slick-active  .group-title').addClass('animated fadeInDown');
	            $('.slick-active  .group-title').removeClass('hidden');

        	});

	        $('.carousel').on('beforeChange', function(event, slick, currentSlide){
	            $('.slick-active  .group-title').removeClass('animated fadeInDown');
	            $('.slick-active  .group-title').addClass('hidden');
	        });
		  
		});

$(window).scroll(function() {
    if($(window).scrollTop() > 0) {

        var parallaxDistance = ($(window).scrollTop()/2), 
            parallaxCSS = "translate3d(0, "+ parallaxDistance +"px , 0)";

        $('.carousel .item img').css('transform', parallaxCSS);

    } else {

        $('.carousel .item img').css('transform', 'translate3d(0, 0, 0)');
    }
});


if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;
 
function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;
 
    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}
 
function handle(delta) {
    var time = 200; // delay time
    var distance = 300; // delta point 
    // Dom where it will apply 
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}
