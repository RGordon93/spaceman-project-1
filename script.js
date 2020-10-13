// 1. Declare and initialize variables 
// 2. Use DOM manipulation to create 
// buttons 
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
const spaceAnswers = ['VENUS', 'EARTH', 'MARS', 'CERES','JUPITER', 'SATURN', 'URANUS', 'NEPTUNE', 'PLUTO',]

// Create a call back function 
// Displaying buttons for answer board
// using dom manipulation 
// Create buttons
const displayBttns = () => {
    // Use a 'for of' statment
    // to iterate over the answer
    // string
    // Use DOM to create a button elem
    // $("").append is a jQuery append
    // Method
    // in the parameter of $ goes the 
    // selector
    // in the parameter of .append is  // for the content or function
    // Append the parent id of char-con
    // to the child class of button 
    // Step to pushing the characters 
    // into the grid (answerBoard)
    // Next task to create characters
	for (value of answer) {
		let bttn = document.createElement('button')
		$(bttn).addClass('answer-button bttn-1');
		$(bttn).text('-');
        $('#char-container').append(bttn)
        answerBoard.push('-')
    }
};

// Creating buttons using the
// characters A through Z
// Use a call back function 
// Set variable firstLetter to A
// Set variable lastLetter to Z
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
        // Returns a string not 
        // a string object
        $(bttn2).text(String.fromCharCode(i))
        // Event listener
		$(bttn2).one('click', bttnGuess)
        $('#bttn-container').append(bttn2);
	}
};
// Create a call back function for
// an event declaration 
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
    console.log(pickedGuess)
    console.log(answerBoard)
    number-- // incrementing down
    $('#guesses').text(number)
	if (checkAnswer()) {
        alert(`You won with ${number} guesses left! The answer is the planet ${answer}, great job! Reset space man 🚀🧠🪐`)
        winSpaceMan()
    } else if (number === 0) {
        alert("Sorry maybe next time, game over! Try again, 🚀🧠🪐")
        winSpaceMan()
    }
    
}
// check for winning answer
// create a call back function 
// 
const checkAnswer = () => {
    let winningAnswer = false;
	if ( !answerBoard.includes('-') ) {
		winningAnswer = true;
    }
    // This method will determine 
    // whether the grid contains the
    // correct characters of 
    // the string answer and 
    // the object answerBoard
    return winningAnswer
}

// creating a reset button after win 
// game
const winSpaceMan = () => {
     let resetBttn = document.createElement('button')
     $(resetBttn).addClass('reset-bttn')
     $(resetBttn).text('reset space man 🚀🧠🪐')
     // Callback function
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
    // set answerBoard to an open 
    // object
    answerBoard = [] 
    number = 10
    $('#guesses').text(number)
    $('#char-container').html('')
    $('#bttn-container').html('')
    charBttns()
    displayBttns()
}

resetSpaceMan()
