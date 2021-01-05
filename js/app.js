'use strict'

//greeting with user's name
var userName = prompt('Please enter your name ?')
alert('Hello ' + userName + '!.. Welcome to my site')

//initial var and prompt a question 
var myAnswer1 = 'YES' ;
var answer1 = prompt('Do you think Brown is my favourate color?');
//check if the answer matching 
if (answer1.toUpperCase() === 'YES' || answer1.toUpperCase() === 'Y') {
    alert('Correct.. ' + 'Brown is not my favourate color !')
    console.log( ' Correct answer');
} else {
    alert('Wrong answer ..');
}

//initial var and prompt a question 
var myAnswer2 = 'YES';
var answer2 = prompt('Do you think Cats is my favourate pet?');
//check if the answer matching 
if (answer2.toUpperCase() === 'YES' || answer2.toUpperCase() === 'Y') {
    alert('Correct.. '  + 'Cat is my favourate pet!')
    console.log( 'Correct answer');
} else {
    alert('Wrong answer ..');
}

//initial var and prompt a question 
var myAnswer3 = 'YES';
var answer3 = prompt('Do you think Spring is my favourate season?');
//check if the answer matching 
if (answer3.toUpperCase() === 'YES' || answer3.toUpperCase() === 'Y') {
    alert('Correct..' +  'Spring is my favourate season !')
    console.log( 'Correct answer');
} else {
    alert('Wrong answer ..');
}
//initial var and prompt a question 
var myAnswer4 = 'YES';
var answer4 = prompt('Do you think Im a great developer?');
//check if the answer matching 
if (answer4.toUpperCase() === 'YES' || answer4.toUpperCase() === 'Y') {
    alert('Correct ..' + 'Sure Im a great developer')
    console.log( 'Correct answer');
} else {
    alert('Wrong answer ..');
}

//initial var and prompt a question 
var myAnswer5 = 'NO';
var answer5 = prompt('Do you think Im NOT a good cooker ?');
//check if the answer matching 
if (answer5.toUpperCase() === 'NO' || answer1.toUpperCase() === 'N') {
    alert('Correct.. ' + 'I do love cooking !')
    console.log( 'Correct answer');
} else {
    alert('Wrong answer ..');
}

document.write('Thank you ..'+userName);

