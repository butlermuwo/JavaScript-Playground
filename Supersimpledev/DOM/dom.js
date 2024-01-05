let buttonElement = document.querySelector('button');

let changeButton = document.querySelector('.change-btn')
changeButton.innerHTML = '9b done';

let displaySentence = document.querySelector('.display-sentence')


function handleHeadBtn() {
    displaySentence.innerHTML = 'You Chose: heads.';
}

function handleTailsBtn() {
    displaySentence.innerHTML = 'You Chose: tails.';
}

let displayText = document.querySelector('.display-input-text');
    console.log(displayText);

function handleSubmit() {
    let inputValue = document.querySelector('.input-btn').value;
    console.log(inputValue);
    displayText.innerHTML = `Your name is: ${inputValue}`;
}