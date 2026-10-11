/*console.log('food is good');
let http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
 */ 
let calculationHistory = [];

const logCalculation = (num1, operator, num2, result) => {
    const logEntry = {
        operand1: num1,
        operator: operator,
        operand2: num2,
        result: result
    };
    calculationHistory.push(logEntry);
}; 

const add= (a, b) => {
  const result = a + b
  logCalculation(a, '+', b, result);
  return result
}

const subtraction = (a, b) => {
  const result = a - b
   logCalculation(a, '-', b, result);
  return result;
}

const multiply = (a, b) => {
  const result = a * b;
  logCalculation(a, '*', b, result);
  return result;
}
console.log(multiply(3, 2))
const divide = (a, b) => {
    if (b === 0) {
        const errorMsg = "Error: Division by zero";
        logCalculation(a, '/', b, errorMsg);
        return errorMsg;
    }
    const result = a / b;
    logCalculation(a, '/', b, result);
    return result;
};
//console.log(add(5, 9))

const displayHistory = () => {
    if (calculationHistory.length === 0) {
        console.log("No stored calculations found in history.");
        return;
    }

    console.log("\n--- Calculation History Log ---");
    calculationHistory.forEach((entry, index) => {
        console.log(`[${index + 1}] ${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result}`);
    });
    console.log("--------------------------------\n");
};


/*function calcHistory (c, operator, d, result) {
    const calculatorEntry = {

    }
}
console.log(history)
function addition ( a, b)  {
    result = a + b;
    return result
}

function subraction (a, b) {
    result = a - b;
    return result
}

function multiply  (a, b) {
    result = a * b
    return result;
}

function division (a, b) {
     result = a / b;
    return result;
}
console.log(multiply(3,5))
for(let i = 0; i < history.length; i++){
    if ( result === ''){
        console.log( "your calculator history is empty")
    } else {
         history.push(result)
         
    }
}*/ 



