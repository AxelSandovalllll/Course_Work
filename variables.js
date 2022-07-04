//VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”


// var num1 = 10;
// var num2 = 20;
// console.log ("The difference between ", + num2 + " and ", + num1 + " is ", + num2 - num1);



// //EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.  Example output: “The name Thomas is longer than John by 2 characters”


// var firstPerson= 'RobertoCarlos'
// var secondPerson=  'Bobby'
// var nameLength = firstPerson.length-secondPerson.length
// //console.log ("The name " + firstPerson + " is longer than " +secondPerson + " by " + firstperson-secondPerson + " characters.");    
// console.log (`The name ${firstPerson} is longer than ${secondPerson} by ${nameLength} characters.`);        



//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally. let person = prompt("Please enter your name", "Harry Potter");


// var person = prompt('Please enter your name.', 'Harry Potter');
// if (person.toUpperCase() === person)  {
// console.log ('WOW YOU ARE EXTREMELY LOUD!');
// }
// else if (person.toLowerCase() === person)  {
//     console.log ('you are very shy.')
// }
// else  {
//     console.log ('you a normal.')
// }



//HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.


// function add(a, b) {
//     return a + b;
// }
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));
// let result = add(number1,number2);
// console.log("The sum of these two numbers is " + result);


// function subtract (a, b) {
//     return a - b;
// }
// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));
// let result2 = subtract(num1,num2);
// console.log("The difference between these two numbers is " + result2);


// function multiply (a, b) {
//     return a * b;
// }
// let numero1 = parseFloat(prompt("Enter first number: "));
// let numero2 = parseFloat(prompt("Enter second number: "));
// let result3 = multiply(numero1,numero2);
// console.log("The product of these two numbers is " + result3);


// function divide (a, b) {
//     return a / b;
// }
// let nume1 = parseFloat(prompt("Enter first number: "));
// let nume2 = parseFloat(prompt("Enter second number: "));
// let result4 = divide(nume1,nume2);
// console.log("The quotient of these two numbers is " + result4);


//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /), and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"


var operator = prompt('what you wanna math? (either +, -, *, or /):');
var number1 = parseFloat(prompt('Enter First Number: '));
var number2 = parseFloat(prompt('Enter Second Number: '));

let result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);
