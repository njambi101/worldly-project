#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

import {createRequire} from 'module';
import readlineSync from 'readline-sync';
import { read } from 'fs';

console.log('Welcome to the Quiz');

let username = readlineSync.question("What's your Name: \n");

console.log(`Hello  ${ username}  , Let's Play the Quiz!!`);
console.log('Rules & Instructions: ');
console.log('1.'+username + ', There are 10 Questions on India and all are Compulsory.');
console.log('2. You will get 2 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');

let score = 0;

var questionsList = [ 
    {
        question : 'India\'s Largest City by Population: ',
        answer : 'Mumbai',
    },
  {
    question : 'National Song of India: ',
    answer : 'Vande Mataram',
  }, 
  {
    question : 'National Motto of India: ',
    answer : 'Satyameva Jayate',
  }, 
  {
    question : 'Golden Temple is situated in: ',
    answer: 'Amritsar',
  },
];


var mcqList = [
  {
    array : ['Mumbai', 'Hyderabad', 'Guragon', 'Bangalore'],
    question : 'Which City is known as "Electronic City of India"? ',
    answer : 'Bangalore'
  },
  {
    array : ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
    question : 'The Indian Institute of Science is located at ',
    answer : 'Bangalore'
  },
  {
    array : ['Dugong', 'Blue whale', 'River Dolphin', 'Pygmy Killer Whale'],
    question : 'What is the name of India\'s National Aquactic Animal: ',
    answer : 'River Dolphin'
  },
   {
    array : ['New Delhi', 'Hyderabad', 'Amritsar', 'Mumbai'],
    question : 'The Centre for Cellular and Molecular Biology in India is situated at: ',
    answer : 'Hyderabad'
  },
  {
    array : ['Delhi', 'Dehradun', 'Lucknow', 'Gandhinagar'],
    question : 'National Institute of Aeronautical Engineering is located at ',
    answer : 'Delhi'
  },
  {
    array : ['T.N.Kaul', 'J.R.D. Tata', 'Nani Palkhivala', 'Khushwant Singh'],
    question : 'Who wrote the famous book - "We the people"? ',
    answer : 'Nani Palkhivala'
  },
];

function quize(question,answer){
    let userAnswer = readlineSync.question(question);

    if(userAnswer.toLowerCase() == answer.toLowerCase()){
        console.log('you are right.');
        score = score + 2
    }else{
        console.log('you are wrong.')
        console.log(`the correct answer is:${answer}`)
        score = score - 1;
    }
    
    if(score < 0){
        score = 0;
    }
    console.log(`the score is ${score}`)
}

//function quizMcq(listOfAnswers,question,answer){}
//function quizMcq(listOfAnswers,question,answer){
    //let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
    function quizMcq(listOfAnswers,question,answer){
    let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);

    if(listOfAnswers[userAnswer] === answer){
    console.log('You are Right.');
    score = score + 2;
  }else{
    console.log('You are Wrong.');
    console.log('The Correct Answer is: ',answer);
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log(chalk.cyan('Score is: ',score));

}

for(var i = 0;i<questionsList.length;i++){
//quiz(questionsList[i].question,questionsList[i].answer);
     //quiz(questionsList[i].question,questionsList[i].answer);
  console.log('*******************************');
}
for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log('*******************************');
}

console.log('\n');
console.log('Congratulations,'+username+'your Total Score is: ',score);










/*let playerName;
const sleep =(ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'who want to be a javascript millionaire?\n'
    )
    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgBlue('How to play')}
        i am a process on your computer.
        if you get any question wrong i will be ${chalk.bgRed('killed')}
        so get all the questions right....        
        `)
    
}

async function handleAnswer(isCorrect){
    const spinner = createSpinner('checking answer...').start();
    await sleep();

    if(isCorrect){
        spinner.success({ text: `Nice work ${playerName}. that's a legit answer` });
    }else{
     spinner.error({text: `💀💀💀 Game over, you lose ${playerName}!`})
     process.exit(1);
    }
}

async function askName(){
    const answers = await inquirer.prompt({
        name:'player_name',
        type: 'input',
        message: 'what is your name?',
        
        default(){
            return 'player name';
        },

    });
    playerName = answers.player_name;

}

async function question1() {
    const answers = await inquirer.prompt({
       name: 'question_1',
       type: 'list',
       message:'javascript was created in 10 days then released on\n',
       choices: [
            'may 23rd, 1995',
            'nov 24th, 1995',
            'Dec 4th, 1995',
            'Dec 17th, 1996',
        ],
      
    });

    return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}




//await welcome();
//await askName();
await question1();
    


let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Who Wants To Be A JavaScript Millionaire? \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Programming isn't about what you know; it's about making the command line look cool`
      )
    );
    process.exit(0);
  });
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'JavaScript was created in 10 days then released on\n',
    choices: [
      'May 23rd, 1995',
      'Nov 24th, 1995',
      'Dec 4th, 1995',
      'Dec 17, 1996',
    ],
  });

  return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
    choices: ['4', '"4"', '"1111"', '69420'],
  });
  return handleAnswer(answers.question_2 === '"1111"');
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
    choices: ['0', '🐏', '🐍', 'undefined'],
  });

  return handleAnswer(answers.question_3 === 'undefined');
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: 'Which of the following is NOT a primitive type?\n',
    choices: [
      'boolean',
      'number',
      'null',
      'object', // Correct
    ],
  });
  return handleAnswer(answers.question_4 === 'object');
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message:
      'JS is a high-level single-threaded, garbage-collected,\n' +
      'interpreted(or just-in-time compiled), prototype-based,\n' +
      'multi-paradigm, dynamic language with a ____ event loop\n',
    choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
  });

  return handleAnswer(answers.question_5 === 'non-blocking');
}

// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();/*
*/
/* function displayMessage(event) {
       if (event.key === 'Enter') {
            calculateShippingCost();
        }
    }
        
 function calculateShippingCost() {
    const input = document.querySelector('.js-number');
    let inputs =Number( input.value);

    if (inputs <= 50){
        inputs += 10;
        console.log(inputs);  
        
    }else if(inputs > 50){
        inputs += 20;
        console.log(inputs);
    }
    document.querySelector('.js-shipping').innerHTML = `the shipping cost is ${inputs}`;
 }*/