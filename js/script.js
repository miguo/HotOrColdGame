$(document).ready(function() {

	var paper = new Raphael(document.getElementById('myArc'), 400, 80);
	var rectangle = paper.rect(60, 26, 280, 20, 5).attr({fill: '#2c3e50', stroke: '#2c3e50'});
	
/*	var randomNumber = Math.ceil(Math.random()*100);
	console.log(randomNumber);

	$(".button-submit").click(playGame);


//Play game function
function playGame() {
	var guessNumber = +$("input:first").val();
	var numDiff = Math.abs(randomNumber - guessNumber);

	if (guessNumber < 1 || guessNumber > 100) {
		alert("Your guess must be between 1 and 100. Try again.")
		return false;
	}

	else if (guessNumber === randomNumber) {
		$('.feedback-text').text("You win!");
		rectangle.attr({
			'fill': '#f1c40f',
			'stroke': '#f1c40f'
		});
	}

	else if (numDiff > 0 && numDiff <= 15) {
		$('.feedback-text').text("You are getting hotter!");
		rectangle.attr({
			'fill': '#e74c3c',
			'stroke': '#e74c3c'
		});
	}

	else if (numDiff >= 16 && numDiff <= 40) {
		$('.feedback-text').text("You are getting warmer.");
		rectangle.attr({
			'fill': '#e67e22',
			'stroke': '#e67e22'
		});
	}

	else (numDiff >= 41 && numDiff <= 99) {
		$('.feedback-text').text("You are getting colder.");
		rectangle.attr({
			'fill': '#2980b9',
			'stroke': '#2980b9'
		});
	}

}

*/

});

