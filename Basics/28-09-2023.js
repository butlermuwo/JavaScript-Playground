// 8 Data Types in JS
//Primitive data types: numbers, strings, boolean, null, undefined, symbols.
//non-primitive data types: objects.

// Check login 

let login = prompt("who is there?");
convertLogin = login.toLowerCase();

if (convertLogin === "admin" ) {
   let adminPassword = prompt("Enter your password");

   if (adminPassword === "themaster") {
    alert("Welcome!")
   } else if (adminPassword === "" || adminPassword === null ) {
    alert("Cancelled!")
   } else {
    alert("Wrong Password!")
   }
} else if ( convertLogin === "" || convertLogin === null ) {
    alert("Cancelled")
} else {
    alert("I don't know you!")
}

// Switch case statements

let browser = prompt('What browser do you use?');
browserName = browser.toLowerCase();

switch (browser) {
    case 'internet explorer':
        alert("You're such an old buddy")
    break;
    case 'google chrome':
    case 'microsoft edge':
    case 'duck duck go':
        alert("Awesome!")
    break;
    default:
        alert('You must be really concerned with privacy to choose brave!')
    
}
