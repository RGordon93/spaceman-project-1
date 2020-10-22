let answers = [
	'MERCURY',
	'VENUS',
	'EARTH',
	'MARS',
	'CERES',
	'JUPITER',
	'SATURN',
	'URANUS',
	'NEPTUNE',
	'PLUTO',
];

let correctAnswer = correctGuess(answers);

const characterButtons = document.querySelectorAll('.character-button');
let buttonsClicked = [];
let numberOfGuessesLeft = 10;
const limit = 10;


console.log(correctAnswer);
let answerGrid = displayAnswerGrid(correctAnswer);
let newAnswerGrid = '';
document.getElementById('answer-grid').innerHTML = answerGrid;
document.getElementById('number-guesses').innerHTML = numberOfGuessesLeft;


const buttonContainer = document.getElementById('button-container')
 for (let i = 0; i < correctAnswer.length; i++) {
    let button = document.createElement('button')
    button.setAttribute('class', 'answer-button')
    button.innerText = '-'
    buttonContainer.appendChild(button)
}
const answerButtons = document.querySelectorAll('.answer-button')

let resetButton = document.getElementById('reset')
resetButton.addEventListener('click', (e) => {
    numberOfGuessesLeft = 10;
    buttonsClicked = [];
    correctAnswer = correctGuess(answers);
    answerGrid = displayAnswerGrid(correctAnswer);
    console.log(resetButton)
    resetSpaceMan()
})


function playSpaceMan() {
    characterButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
			const character = e.target.innerText;
            const correctAnswerIndex = correctAnswer.indexOf(character)
            if (correctAnswerIndex >= 0) {
                answerButtons[correctAnswerIndex].innerText = character
            }
			buttonsClicked.push(character);
			console.log(buttonsClicked);
			button.disabled = true;
			winGame(character, correctAnswer);
		});
	});
}
playSpaceMan();

// const reset = document.querySelector('.reset');
// reset.addEventListener('click', resetSpaceMan);

function resetSpaceMan() {
	correctAnswer = correctGuess(answers);
    answerGrid = displayAnswerGrid(correctAnswer);
    numberOfGuessesLeft = 10;
    buttonsClicked = [];
	document.getElementById('answer-grid').innerText = answerGrid;
    document.getElementById('number-guesses').innerHTML = numberOfGuessesLeft;
	characterButtons.forEach((button) => {
        button.disabled = false;
	});
}


function displayAnswerGrid(correctAnswer) {
	let answerGrid = '';
	for (let i = 0; i < correctAnswer.length; i++) {
		let character = correctAnswer[i];
		if (character !== ' ') {
			answerGrid += '-';
		} else {
			answerGrid += '   ';
		}
	}
	return answerGrid;
}

function randomIndex(limit) {
	return Math.floor(Math.random() * Math.floor(limit));
}

function correctGuess(charactersIndex) {
	const index = randomIndex(charactersIndex.length);
	const correctAnswer = charactersIndex[index];
	console.log(correctAnswer);
	return correctAnswer;
}

function winGame(characters, correctAnswer) {
	let playerChoices = false;
	for (let playerChoiceIndex = 0; playerChoiceIndex < correctAnswer.length; playerChoiceIndex++) {
		let presentChoice = correctAnswer[playerChoiceIndex];
		presentChoice = presentChoice.toUpperCase();
		characters = characters.toUpperCase();
		lastIndex = correctAnswer.length - 1;
		if (characters === presentChoice) {
			playerChoices = true;

			answerGrid =
				answerGrid.substring(0, playerChoiceIndex) +
				presentChoice +
				answerGrid.substring(playerChoiceIndex + 1);

			document.getElementById('answer-grid').innerHTML = answerGrid;
			if (answerGrid === correctAnswer) {
				alert(`You won with ${numberOfGuessesLeft} guesses left! The answer is the planet ${answerGrid}, great job! Reset space man 🚀🧠🪐`
				);
				resetSpaceMan();
			}
		}
		if (characters !== presentChoice < playerChoiceIndex) {
			playerChoices = false;
		}
	}

	if (!playerChoices) {
		numberOfGuessesLeft--;
		if (numberOfGuessesLeft <= 0) {
			resetSpaceMan();
		}
		document.getElementById('number-guesses').innerHTML = numberOfGuessesLeft;
	}
}
