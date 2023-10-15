//Functions

function greeting() {
    console.log("Hello World")
}

greeting()

//methods are functions that are part of objects.

const myObj = {
    name: "Butler",
    country: "Zambia",
    greeting: function() {
        console.log("Hello World");
    }
};

myObj.greeting()


