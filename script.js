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
const buttonContainer = document.getElementById('button-container');
let correctAnswer = correctGuess(answers);
for (let i = 0; i < correctAnswer.length; i++) {
	let button = document.createElement('button');
	button.setAttribute('class', 'answer-button');
	button.innerText = '-';
	buttonContainer.appendChild(button);
}

const characterButtons = document.querySelectorAll('.character-button');
const gridArea = document.getElementById('answer-grid');
const guessesArea = document.getElementById('number-guesses');
const answerButtons = document.querySelectorAll('.answer-button');
const resetButton = document.getElementById('reset');

let buttonsClicked = [];
let numberOfGuessesLeft = 10;
// const limit = 10;

console.log(correctAnswer);
let answerGrid = displayAnswerGrid(correctAnswer);
let newAnswerGrid = '';
gridArea.innerHTML = answerGrid;
guessesArea.innerHTML = numberOfGuessesLeft;

resetButton.addEventListener('click', resetSpaceMan);

function playSpaceMan() {
	characterButtons.forEach((button) => {
		button.addEventListener('click', (e) => {
			console.log(answerButtons)
			const character = e.target.innerText;
			const correctAnswerIndex = correctAnswer.indexOf(character);
			if (correctAnswerIndex >= 0) {
				answerButtons[correctAnswerIndex].innerText = character;
			}
			buttonsClicked.push(character);
			console.log(buttonsClicked);
			button.disabled = true;
			winGame(character, correctAnswer);
		});
	});
}
playSpaceMan();

function resetSpaceMan() {
	numberOfGuessesLeft = 10;
	buttonsClicked = [];
	correctAnswer = correctGuess(answers);
	answerGrid = displayAnswerGrid(correctAnswer);
	newAnswerGrid = '';
	gridArea.innerHTML = answerGrid;
	guessesArea.innerHTML = numberOfGuessesLeft;
	buttonContainer.innerHTML = '';
	for (let i = 0; i < correctAnswer.length; i++) {
		let button = document.createElement('button');
		button.setAttribute('class', 'answer-button');
		button.innerText = '-';
		buttonContainer.appendChild(button);
	}
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
	for (
		let playerChoiceIndex = 0;
		playerChoiceIndex < correctAnswer.length;
		playerChoiceIndex++
	) {
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

			gridArea.innerHTML = answerGrid;
			if (answerGrid === correctAnswer) {
				alert(
					`You won with ${numberOfGuessesLeft} guesses left! The answer is the planet ${answerGrid}, great job! Reset space man 🚀🧠🪐`
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
		guessesArea.innerHTML = numberOfGuessesLeft;
	}
}
