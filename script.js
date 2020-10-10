
let answer;
let answerBoard;
let num;
const spaceAnswers = ['VENUS', 'EARTH', 'MARS', 'CERES','JUPITER', 'SATURN', 'URANUS', 'NEPTUNE', 'PLUTO', 'CHARON']
// Creating buttons for answer grid
const displayBttns = () => {
	for (let letter of answer) {
		let bttn = document.createElement('button')
		$(bttn).addClass('answer-button bttn-post bttn-1');
		$(bttn).text('-');
        $('#char-container').append(bttn)
        answerBoard.push('-')
    }
};

// Creating buttons using characters
// Use a call back function / method
const charBttns = () => {
	let firstLetter = 'A'
	let lastLetter = 'Z'
	// Use the method charCodeAt to return
	// the desired characters 'A-Z'
	// The for loop will display 'A-Z' in the console
	for (i = firstLetter.charCodeAt(); i <= lastLetter.charCodeAt(); i++) {
		//   console.log(String.fromCharCode(i))
		let bttn2 = document.createElement('button')
		$(bttn2).addClass('answer-button2 bttn-main bttn-2')
		$(bttn2).text(String.fromCharCode(i))
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
			let corrGuess = $('#char-container .bttn-post')[i];
			$(corrGuess).text(pickedGuess);
			answerBoard[i] = pickedGuess;
		}
	}
    console.log(answerBoard)
    num-- // incrementing down
    $('#guesses').text(num)
	if (checkAnswer()) {
        alert(`You won with ${num} guesses left! The answer is ${answer}, great job! 🚀🧠🪐`)
        winSpaceMan()
    } else if (num === 0) {
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
     $(resetBttn).addClass('reset-bttn end-bttn')
     $(resetBttn).text('Reset Space Man')
     $(resetBttn).on('click', function() { $(resetBttn).remove()
        startGame()

     })
     $('#board').append(resetBttn)
}
// function to reset the game
// use the same format for the first 
// variables declared 
const startGame = () => {
    answer = spaceAnswers[ Math.floor(Math.random() * spaceAnswers.length) ]
    answerBoard = []
    num = 10
    $('#guesses').text(num)
    $('#char-container').html('')
    $('#bttn-container').html('')
    charBttns()
    displayBttns()
}

startGame()
