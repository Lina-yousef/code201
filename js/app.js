'use strict';

var score = 0;

//greeting with user's name
var userName = prompt('Please enter your name ?');
while (userName === 0 || userName === null || userName=== '' ) {
    alert('Wrong input please enter your name ..');
    userName = prompt('Please enter your name ?');
}
alert('Hello .. ' + userName + '!.. Welcome to my site');



//check if the answer matching 
ques1();

//initial var and prompt a question 
ques2();

//initial var and prompt a question 
ques3();
//initial var and prompt a question 
ques4();

//initial var and prompt a question 
ques5();
var correctNum = 21;
var guessNum;
ques6();

document.write('Thank you ..' + userName);


// Lab 03

// let the user guesses the correct number with just 4 chances


function ques6() {
    for (var i = 0; i < 4; i++) {
        guessNum = prompt('Guess a random number between 1 to 50 ?');

        if (parseInt(guessNum) === correctNum) {
            alert('You gessed the correct number!' + correctNum);
            score++;
            break;
        }
        else if (parseInt(guessNum) < correctNum) {
            alert('too low .. try again!');
        }
        else if (parseInt(guessNum) > correctNum) {
            alert('Too high .. try again!');
        }
        else {
            alert('Please insert a number..');
        }
    }
}
console.log(guessNum);

// let the user guesses answer with many possible answers with just 6 attempt

ques7();
alert('Your total correct answers ' + score + '/7');

function ques7() {
    var favColor = ['purple', 'pink', 'green', 'blue', 'white', 'yellow'];

    var userColor = prompt('Guess one of my top favourate colors  ?');
var userCol = userColor.toString();
    var triger = true;
    var counter = 0;
    while (!favColor.includes(userColor) && triger) {
        counter++;
        if (counter === 6) {
            triger = false;
        }
        alert('guess again');
        userColor = prompt('Guess one of my top favourate colors  ?');
    }
    if (favColor.includes(userColor)) {
        score++;
        alert('This is my top favourate colors' + favColor);
        console.log(userColor);
    }
}

function ques5() {
    var myAnswer5 = 'NO';
    var answer5 = prompt('Do you think Im NOT a good cooker ?');
    //check if the answer matching 
    if (answer5.toUpperCase() === 'NO' || answer1.toUpperCase() === 'N') {
        alert('Correct.. ' + 'I do love cooking !');
        console.log('Correct answer');
        score++;
    } else {
        alert('Wrong answer ..');
    }
}


function ques4() {
    var myAnswer4 = 'YES';
    var answer4 = prompt('Do you think Im a great developer?');
    //check if the answer matching 
    if (answer4.toUpperCase() === 'YES' || answer4.toUpperCase() === 'Y') {
        alert('Correct ..' + 'Sure Im a great developer');
        console.log('Correct answer');
        score++;
    } else {
        alert('Wrong answer ..');
    }
}

function ques3() {
    var myAnswer3 = 'YES';
    var answer3 = prompt('Do you think Spring is my favourate season?');
    //check if the answer matching 
    if (answer3.toUpperCase() === 'YES' || answer3.toUpperCase() === 'Y') {
        alert('Correct..' + 'Spring is my favourate season !');
        console.log('Correct answer');
        score++;
    } else {
        alert('Wrong answer ..');
    }
}



function ques2() {
    var myAnswer2 = 'YES';
    var answer2 = prompt('Do you think Cats is my favourate pet?');
    //check if the answer matching 
    if (answer2.toUpperCase() === 'YES' || answer2.toUpperCase() === 'Y') {
        alert('Correct.. ' + 'Cat is my favourate pet!');
        console.log('Correct answer');
        score++;
    } else {
        alert('Wrong answer ..');
    }
}

function ques1() {
    //initial var and prompt a question 
    var myAnswer1 = 'YES';
    var answer1 = prompt('Do you think Brown is my favourate color?');
    //check if the answer matching 
    if (answer1.toUpperCase() === 'YES' || answer1.toUpperCase() === 'Y'){
        alert('Correct.. ' + 'Cat is my favourate pet!');
        console.log('Correct answer');
        score++;
    } else {
        alert('Wrong answer ..');
    }
}



//console.log(myNum);
//var myNum = [1, 2, 3, 4, 5];

//var stdNames = ['Lina', 'Ahmad', 'Aseel'];
//var userInput = prompt('Give me your user name ?');

//stdNames.push(userInput); //add user's name to my array
//console.log(stdNames);
//stdNames[]

//for (var i = 0; i < stdNames.length; index++) {

//  console.log(stdNames[index]);
  //  console.log(stdNames[index]);
