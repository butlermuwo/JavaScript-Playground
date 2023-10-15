// more function practice
// the item added in the function declaration between the parenthesis in the func name is called a parametre
function favoriteCar(car) {
    return `my favorite car is a ${car}`;
}

// An argument is the value that is passed to a function when it is called
console.log(favoriteCar('Tesla'))


/*

Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d" */

// Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
    return number + 7;
}

console.log(add7(8))

//Write a function called multiply that takes 2 numbers and returns their product.
function multiply(a,b) {
    return a * b;
}

console.log(multiply(7,8))

//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(randomString) {
    let firstLetter = randomString[0].toUpperCase();
    let restOfSentence = randomString.slice(1).toLowerCase();
    return firstLetter + restOfSentence;
}

console.log(capitalize("butler"))

//Write a function called lastLetter that takes a string and returns the very last letter of that string:
function lastLetter(last) {
        let removeLastLetter = last.slice(0,-1);
        return removeLastLetter;
}

console.log(lastLetter("Butler"))

