function percentage(cId, r, width, color, fontP, fontT, p, text){
	var canvas = document.getElementById(cId);
	canvas.width = r;
	canvas.height = r;
	var context = canvas.getContext('2d');
	context.beginPath();
 	context.arc(r, r, r, 0, Math.PI * 2, true);
 	context.closePath();
 	context.stroke();
 	context.arc(r, r, r - width, 0, Math.PI * 2, true);
 	context.closePath();
 	context.stroke();
	/*context.font = font;
	context.textBaseline = 'top';
	context.fillText(text, start_x, start_y);*/
}