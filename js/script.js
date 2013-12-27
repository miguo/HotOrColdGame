$(document).ready(function() {

	var paper = new Raphael(document.getElementById('myArc'), 400, 80);
	var rectangle = paper.rect(60, 26, 280, 20, 5).attr({'fill': '#2c3e50', 'stroke': '#2c3e50'}); 


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
	
	var randomNumber = Math.ceil(Math.random()*100);
	var guessNumber = $("input:first").val();
//Note: Does the code below get the same value as $("input:first").val();?
//	var guessNumber = document.getElementById('guess-box').value;
	var numDiff = Math.abs(randomNumber - guessNumber);


	if (guessNumber < 1 || guessNumber > 100) {
		alert("Your guess must be a number between 1 and 100. Try again.")
		return false;
	}

/* Note: Something is wrong with the math. If I check the console.log for the random number, and then
input the number to the form field, it does not say "You win!" Additionally, if I input a number,
then click the Submit button multiple times, it gives me different values such as "You are getting
hotter" or "You are getting warmer" even though the guessNumber has not changed. */
	else if (guessNumber === randomNumber) {
		$('#feedback-text').text("You win!");
		rectangle.attr({'fill': '#f1c40f', 'stroke': '#f1c40f'}); 
	}

	else if (numDiff > 0 && numDiff <= 15) {
		$('#feedback-text').text("You are getting hotter!");
		rectangle.attr({'fill': '#e74c3c', 'stroke': '#e74c3c'}); 
	}

	else if (numDiff >= 16 && numDiff <= 40) {
		$('#feedback-text').text("You are getting warmer.");
		rectangle.attr({'fill': '#e67e22', 'stroke': '#e67e22'}); 
	}

	else if (numDiff >= 41 && numDiff <= 99) {
		$('#feedback-text').text("You are getting colder.");
		rectangle.attr({'fill': '#2980b9', 'stroke': '#2980b9'});
	}

	else {
		$('#feedback-text').text("Great job! Click Start Over to play again.");
		rectangle.attr({'fill': '#2c3e50', 'stroke': '#2c3e50'});
	}

} 


//Generate a random number
 function getRandomNumber() {
	var randomNumber = Math.ceil(Math.random()*100);
	console.log("This round's random number is " + randomNumber);
}

//New game upon page reload
window.onload = function(){
	getRandomNumber();
}

//Show previous guesses
$('#previousGuesses').hide();
$('#button-submit').click(function() {
	var guessNumber = $("input:first").val();
	$('#previousGuesses').show();
//Note: How do I get the last number to not have the comma?
	$('#previousGuesses').append(guessNumber + ", ");
});



});

