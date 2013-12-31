$(document).ready(function() {

	var paper = new Raphael(document.getElementById('myArc'), 400, 80);
	var rectangle = paper.rect(60, 26, 280, 20, 5).attr({'fill': '#2c3e50', 'stroke': '#2c3e50'}); 
	var randomNumber = Math.floor((Math.random()*100) + 1);


	//Generate a random number
 	function getRandomNumber() {
		console.log("This round's random number is " + randomNumber);
	}


	//New game upon page reload
	window.onload = function(){
		getRandomNumber();
	}


	//Event handler to allow users to submit guess using Enter key
	$('input').bind('keypress', function(e) {
	if(e.keyCode == 13) {
		$('#button-submit').triggerHandler('click');
	//Note: Reset below clears form field after pressing Enter but not after pressing Submit. Why?
		document.getElementById('guess-here').reset();
	}
	});


	//Play game function
	document.getElementById('button-submit').onclick = function playGame() {
		event.preventDefault();
		var guessNumber = $("#guess-box").val();
		var numDiff = Math.abs(randomNumber - guessNumber);

		if (guessNumber < 1 || guessNumber > 100) {
			alert("Your guess must be a number between 1 and 100. Try again.")
			return false;
		}

		else if (numDiff > 0 && numDiff <= 10) {
			$('#feedback-text').text("You are getting hotter!");
			rectangle.attr({'fill': '#e74c3c', 'stroke': '#e74c3c'}); 
		}

		else if (numDiff >= 11 && numDiff <= 30) {
			$('#feedback-text').text("You are getting warmer.");
			rectangle.attr({'fill': '#e67e22', 'stroke': '#e67e22'}); 
		}

		else if (numDiff >= 31 && numDiff <= 70) {
			$('#feedback-text').text("You are getting colder.");
			rectangle.attr({'fill': '#2980b9', 'stroke': '#2980b9'});
		}

		else if (numDiff >= 71 && numDiff <= 99) {
			$('#feedback-text').text("You are freezing cold, but don't give up just yet!");
			rectangle.attr({'fill': '#bdc3c7', 'stroke': '#bdc3c7'});
		}

		else {
			$('#feedback-text').text("You win! Click Start Over to play again.");
			rectangle.attr({'fill': '#f1c40f', 'stroke': '#f1c40f'});
		}

	} 


	//Show previous guesses
	$('#previousGuesses').hide();
	$('#button-submit').click(function() {
		var guessNumber = $("#guess-box").val();
		var numDiff = Math.abs(randomNumber - guessNumber);
		$('#previousGuesses').show();
		if (numDiff === 0) {
			$('#previousGuesses').append(guessNumber);
		}

		else {
			$('#previousGuesses').append(guessNumber + ", ");
		}

	});



	});

