//Importing dependencies 
var readlineSync = require('readline-sync');
var chalk = require('chalk');

//userName input and Welcome message
var userName = readlineSync.question("What is you name? ");
console.log('-----------------------------');
console.log(chalk.yellow('Hey, '+ userName+'!'));
console.log("Let's see how well you know Siddhartha.");
console.log('-----------------------------');

//Question List1
var queslist1 = [
  question1 = {
  question: 'What is my favourite outdoor sport? ',
  answer: 'football',
  option: ['Cricket', 'Volleyball', 'football']
},
question2 = {
  question: 'What i am currently studying? ',
  answer: 'engineering',
  option: ['engineering', 'MBA', 'law']
},
question3 = {
  question: ' In Which college am i currently studying? ',
  answer: 'DBIT',
  option: ['DBIT', 'IIT', 'BITS']
},
question4 = {
  question: 'Where do I live? ',
  answer: 'navi mumbai',
  option: [' navi mumbai', 'bangalore', 'mumbai']
},
question5 = {
  question: 'What is my favourite colour? ',
  answer: 'black',
  option: ['red', 'black', 'blue']
}
];

//highScores List 
var highScores = [{name: 'AAA', score:4}, {name:'bbb', score:2}];


var score = 0;

// Asking question, validating answer, updating score 
for(var i=0; i<queslist1.length; i++){
  var index = readlineSync.keyInSelect(queslist1[i].option, queslist1[i].question);
  if(queslist1[i].option[index] === queslist1[i].answer){
    console.log(chalk.green('right!'));
    score++;
  }
  else{
    console.log(chalk.red('wrong!'));
  }

  console.log('Your Score:',score);
  console.log('------------------');
}

//Display user's final score
console.log('Your Final Score', score);
console.log();

//Update highScores
for(var i=0; i<highScores.length; i++){
  if(score >= highScores[i].score){
    console.log(chalk.green('Your are in the one of the high scorers!'));
    console.log(chalk.green('PS: Send me a screenshot :P'));
    highScores[i].name = userName;
    highScores[i].score = score;
    break;
  }
  else{
    console.log(chalk.red("You did not make it to the high scorer's list"));
  }
  
}

//Display alltime highScores
console.log();
console.log('------------------');
console.log("High Scores");
for(var i=0; i<highScores.length; i++){
  console.log(i+1+'.'+highScores[i].name+': '+highScores[i].score);
}
console.log('------------------');