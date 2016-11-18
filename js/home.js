$(window).scroll(function() {
   	var hT = $('#skills').offset().top,
       	hH = $('#skills').outerHeight(),
       	wH = $(window).height(),
       	wS = $(this).scrollTop();
    /*   	console.log(hT);
       	console.log(hH);
       	console.log(wH);
       	console.log(wS);
       	console.log('----');*/
    //console.log((hT-wH) , wS);
   	if (wS > (hT+hH-wH) && wS < (hT+hH-wH+5)){
      	percentage('can1', 100, 20, '#35AFBA', '#DDD', '30px Arial', '20px Arial', 25, 25, 20, 80, 'PHP');
      	percentage('can2', 100, 20, '#FF6060', '#DDD', '30px Arial', '20px Arial', 25, 50, 20, 70, 'HTML/CSS');
      	percentage('can3', 100, 20, '#3AD079', '#DDD', '30px Arial', '20px Arial', 25, 75, 20, 75, 'Javascript/jQuery');
      	percentage('can4', 100, 20, '#58C0E3', '#DDD', '30px Arial', '20px Arial', 25, 25, 20, 65, 'MySQL');
   	}
});