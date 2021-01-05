'use strict'
var score=0;
//greeting with user's name
var userName = prompt('Please enter your name ?')
alert('Hello ' + userName + '!.. Welcome to my site')

//initial var and prompt a question 
var myAnswer1 = 'YES';
var answer1 = prompt('Do you think Brown is my favourate color?');
//check if the answer matching 
if (answer1.toUpperCase() === 'YES' || answer1.toUpperCase() === 'Y') {
    alert('Correct.. ' + 'Brown is not my favourate color !')
    console.log(' Correct answer');
    score++;
} else {
    alert('Wrong answer ..');
}

//initial var and prompt a question 
var myAnswer2 = 'YES';
var answer2 = prompt('Do you think Cats is my favourate pet?');
//check if the answer matching 
if (answer2.toUpperCase() === 'YES' || answer2.toUpperCase() === 'Y') {
    alert('Correct.. ' + 'Cat is my favourate pet!')
    console.log('Correct answer');
    score++;
} else {
    alert('Wrong answer ..');
}

//initial var and prompt a question 
var myAnswer3 = 'YES';
var answer3 = prompt('Do you think Spring is my favourate season?');
//check if the answer matching 
if (answer3.toUpperCase() === 'YES' || answer3.toUpperCase() === 'Y') {
    alert('Correct..' + 'Spring is my favourate season !')
    console.log('Correct answer');
    score++;
} else {
    alert('Wrong answer ..');
}
//initial var and prompt a question 
var myAnswer4 = 'YES';
var answer4 = prompt('Do you think Im a great developer?');
//check if the answer matching 
if (answer4.toUpperCase() === 'YES' || answer4.toUpperCase() === 'Y') {
    alert('Correct ..' + 'Sure Im a great developer')
    console.log('Correct answer');
    score++;
} else {
    alert('Wrong answer ..');
}

//initial var and prompt a question 
var myAnswer5 = 'NO';
var answer5 = prompt('Do you think Im NOT a good cooker ?');
//check if the answer matching 
if (answer5.toUpperCase() === 'NO' || answer1.toUpperCase() === 'N') {
    alert('Correct.. ' + 'I do love cooking !')
    console.log('Correct answer');
    score++;
} else {
    alert('Wrong answer ..');
}

document.write('Thank you ..' + userName);


// Lab 03

// let the user guesses the correct number with just 4 chances


var correctNum = 21;

for (var numOfOportunity = 0; numOfOportunity < 4; numOfOportunity++) {

    var guessNum = prompt('Guess a random number between 1 to 50 ?')

    if (parseInt(guessNum) == correctNum) {
        alert('You gessed the correct number!');
        score++;
    } else if (parseInt(guessNum) < correctNum) {
        alert('too low .. try again!');
    }
    else if (parseInt(guessNum > correctNum)) {
        alert('Too high .. try again!')
    }

}
alert('Sorry ..You take all of your possible opportunities. ' + 'The correct number is ' + correctNum);


 // let the user guesses answer with many possible answers with just 6 attempt

var favColor = ['purple', 'pink', 'green', 'blue', 'white', 'yellow']

for (var numOfAttempt = 0; numOfAttempt < 6; numOfAttempt++) {

    var userColor = prompt('Guess one of my top favourate colors  ?')
    switch (userColor.toLocaleLowerCase()) {

        case favColor[0]:
            alert('Correct guess ..');
            score++
            break;

        case favColor[1]:
            alert('Correct guess ..');
            score++;
            break;
        case favColor[2]:
            alert('Correct guess ..');
            score++;
            break;
        case favColor[3]:
            alert('Correct guess ..');
            score++;
            break;
        case favColor[4]:
            alert('Correct guess ..');
            score++;
            break;
        case favColor[5]:
            alert('Correct guess ..');
            score++;
            break;

        default:
            alert('Invalid answer');

    }
    alert('This is my top favourate colors'+ favColor);






}// Total score of the 7 questions
alert('Your total correct answers '+score+'/7');



//console.log(myNum);
//var myNum = [1, 2, 3, 4, 5];

//var stdNames = ['Lina', 'Ahmad', 'Aseel'];
//var userInput = prompt('Give me your user name ?');

//stdNames.push(userInput); //add user's name to my array
//console.log(stdNames);
//stdNames[]

//for (var i = 0; i < stdNames.length; index++) {
//  console.log(stdNames[index]);












