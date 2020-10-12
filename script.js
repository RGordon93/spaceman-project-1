// 1. Declare variables 
// 2. Use DOM to create buttons /
//  container to display the 
// answer grid  
// 3. Use DOM to create buttons 
//container to display a character 
// keyboard to choose from 
// 4. Add an event listener for when 
// the right button is clicked 
// 5. Create reset methods using DOM 
// and functions
// to reset the game not by refreshing
// the page

let answer
let answerBoard
let number
const spaceAnswers = ['VENUS', 'EARTH', 'MARS', 'CERES','JUPITER', 'SATURN', 'URANUS', 'NEPTUNE', 'PLUTO', 'CHARON']

// Creating buttons for answer grid 
// using dom manipulation 
const displayBttns = () => {
    // Use a 'for of' statment
    // to iterate through
    // the answerBoard object
    // pushing characters to display 
	for (let value of answer) {
		let bttn = document.createElement('button')
		$(bttn).addClass('answer-button bttn-1');
		$(bttn).text('-');
        $('#char-container').append(bttn)
        answerBoard.push('-')
    }
};

// Creating buttons using characters
// Use a call back function 
const charBttns = () => {
	let firstLetter = 'A'
	let lastLetter = 'Z'
    // Use the charCodeAt method to 
    // return 
	// the desired characters 'A-Z'
	// The for loop will display 'A-Z' in the console
	for (i = firstLetter.charCodeAt(); i <= lastLetter.charCodeAt(); i++) {
		//   console.log(String.fromCharCode(i))
		let bttn2 = document.createElement('button')
		$(bttn2).addClass('answer-button2 bttn-2')
        $(bttn2).text(String.fromCharCode(i))
        // Event listener
		$(bttn2).one('click', bttnGuess)
		$('#bttn-container').append(bttn2);
		charBttns.push;
	}
};
// A event listener for when a
// corrected answer is picked
const bttnGuess = (event) => {
	let pickedGuess = $(event.target).text();
	for (i = 0; i < answer.length; i++) {
		if (pickedGuess === answer[i]) {
			let corrGuess = $('#char-container .bttn-1')[i];
			$(corrGuess).text(pickedGuess);
			answerBoard[i] = pickedGuess;
		}
	}
    console.log(answerBoard)
    number-- // incrementing down
    $('#guesses').text(number)
	if (checkAnswer()) {
        alert(`You won with ${number} guesses left! The answer is the planet ${answer}, great job! 🚀🧠🪐`)
        winSpaceMan()
    } else if (number === 0) {
        alert("Sorry, game over! Try again 🚀🧠🪐")
        winSpaceMan()
    }
    
}
// console.log(answerBoard)
// shows the answer in an array
// check for winning answer
const checkAnswer = () => {
	let win = false;
	if ( !answerBoard.includes('-') ) {
		win = true;
	}
	return win
}
// creating a reset button after win 
// game
const winSpaceMan = () => {
     let resetBttn = document.createElement('button')
     $(resetBttn).addClass('reset-bttn')
     $(resetBttn).text('reset space man 🚀🧠🪐')
     $(resetBttn).on('click', function() { $(resetBttn).remove()
        resetSpaceMan()

     })
     $('#board').append(resetBttn)
}

// function to reset the game
// use the same format for the first 
// variables declared 
const resetSpaceMan = () => {
    answer = spaceAnswers[ Math.floor(Math.random() * spaceAnswers.length) ]
    answerBoard = []
    number = 10
    $('#guesses').text(number)
    $('#char-container').html('')
    $('#bttn-container').html('')
    charBttns()
    displayBttns()
}

resetSpaceMan()
