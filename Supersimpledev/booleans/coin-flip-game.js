let randomNumber = Math.random();
let result = '';
let guess = 'heads';
console.log(randomNumber)
if (randomNumber < 0.5) {
    // console.log('heads')
    result = 'heads';
} else {
    // console.log('tails')
    result = 'tails';
}

if (result === guess) {
    console.log("You win")
} else {
    console.log('You lose')
}