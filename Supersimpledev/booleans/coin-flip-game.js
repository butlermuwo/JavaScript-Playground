let randomNumber = Math.random();
let result = randomNumber < 0.5? 'heads': 'tails';
let guess = 'tails';
console.log(randomNumber)
// if (randomNumber < 0.5) {
//     // console.log('heads')
//     result = 'heads';
// } else {
//     // console.log('tails')
//     result = 'tails';
// }

// if (result === guess) {
//     console.log("You win")
// } else {
//     console.log('You lose')
// }

result === guess? console.log('You Win') : console.log('You lose');