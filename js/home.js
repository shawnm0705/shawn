$(window).scroll(function() {
   	var hT = $('#skills').offset().top,
       	hH = $('#skills').outerHeight(),
       	wH = $(window).height(),
       	wS = $(this).scrollTop();
    //console.log((hT-wH) , wS);
   	if (wS > (hT+hH-wH)){
      	percentage('can1', 50, 10, '#35AFBA', 18, 15, 60, 'PHP');
   	}
});