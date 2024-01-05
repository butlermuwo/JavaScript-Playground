let buttonElement = document.querySelector('button');
console.log(buttonElement)

let changeButton = document.querySelector('.change-btn')
changeButton.innerHTML = '9b done';
console.log(changeButton);

let displaySentence = document.querySelector('.display-sentence')


function handleHeadBtn() {
    displaySentence.innerHTML = 'You Chose: heads.';
}

function handleTailsBtn() {
    displaySentence.innerHTML = 'You Chose: tails.';
}