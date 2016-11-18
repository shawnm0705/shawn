function percentage(cId, r, width, color, bColor, fontP, fontT, xOffsetP, xOffsetT, yOffset, p, text){
	var canvas = document.getElementById(cId);
	var canvasW = r * 2 + width;
	canvas.width = canvasW;
	canvas.height = canvasW;
	var context = canvas.getContext('2d');
	var x = r + width/2;
	var angle = - Math.PI/2;
	var per = 0;
	context.textBaseline = 'middle';
	context.fillStyle = color;
	var interval = setInterval(function(){
		context.clearRect(0, 0, canvasW, canvasW);
		angle += Math.PI * 2/100;
		per += 1;
	 	context.lineWidth = width;
		context.beginPath();
	 	context.strokeStyle = color;
	 	context.arc(x, x, r, - Math.PI/2, angle, false);
	 	context.stroke();
		context.beginPath();
	 	context.strokeStyle = bColor;
	 	context.arc(x, x, r, Math.PI * 3/2, angle, true);
	 	context.stroke();

		context.font = fontP;
		context.fillText(per + '%', x - xOffsetP, x - yOffset);
		context.font = fontT;
		context.fillText(text, x - xOffsetT, x + yOffset);
		if(per >= p){
			clearInterval(interval);
		}
	}, 25);

}