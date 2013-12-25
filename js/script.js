$(document).ready(function() {

	var paper = new Raphael(document.getElementById('myArc'), 400, 80);
	var rectangle = paper.rect(60, 26, 280, 20, 5);



//Changes feedback-text based on difference between guess and answer


	
//sample of changing the color meter
//	if (guessNumber === randomNumber) {
//	
//	}

	rectangle.attr({
        'fill': '#2c3e50',
        'stroke': '#2c3e50'
    });
    
    var clicked = false;
    
    rectangle.click(function() {
        if (clicked) {
            rectangle.attr({
                'fill': '#2c3e50',
                'stroke': '#2c3e50'
            });
        } else {
            rectangle.attr({
                'fill': '#2980b9',
                'stroke': '#2980b9'
            });
        }
        clicked = !clicked;
    });



});
