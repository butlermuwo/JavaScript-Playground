function greet(name) {
    if (!name) {
        console.log('Hey there!')
    } else {
        console.log(`Hello ${name}!`)
    }
}

greet('Butler Shimaluwani')
greet('Zephyr')
greet()

// Temp converter

function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit)
}

convertToFahrenheit(25);

function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(celsius)
}

convertToCelsius(86);




function convertTemperature(degrees, unit) {

    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;     
    }

    function convertToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    if (unit.toLowerCase() === 'c') {
        console.log(`${degrees} Celsius is ${convertToFahrenheit(degrees)} Fahrenheit`);
    } else if (unit.toLowerCase() === 'f') {
        console.log(`${degrees} Fahrenheit is ${convertToCelsius(degrees)} Celsius`);
    } else {
        console.log('Invalid input');
    }
}

convertTemperature(86, 'f');
