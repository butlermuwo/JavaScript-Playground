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
