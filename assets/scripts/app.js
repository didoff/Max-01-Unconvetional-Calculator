const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function writeDescription(operator, resultBefore, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// Creates an object for each operation and adds it to an array of entires
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  //   console.log(logEntries);
}

// Calculates the result based on the operation button; calls operation description writer and adds operation to the operation log (logEntries array)
// function calculateResult(operation) {
//   if (
//     operation !== "ADD" &&
//     operation !== "SUBTRACT" &&
//     operation !== "MULTIPLY" &&
//     operation !== "DIVIDE"
//   ) {
//     return;
//   }

//   const enteredNumber = getUserInput();
//   const initialResult = currentResult;
//   let mathOperator;
//   if (operation === "ADD") {
//     currentResult += enteredNumber;
//     mathOperator = "+";
//   } else if (operation === "SUBTRACT") {
//     currentResult -= enteredNumber;
//     mathOperator = "-";
//   } else if (operation === "MULTIPLY") {
//     currentResult *= enteredNumber;
//     mathOperator = "*";
//   } else if (operation === "DIVIDE") {
//     currentResult /= enteredNumber;
//     mathOperator = "/";
//   }

//   writeDescription(mathOperator, initialResult, enteredNumber);
//   writeToLog(operation, initialResult, enteredNumber, currentResult);
// }

function calculate(operation) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;

  if (operation === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (operation === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (operation === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (operation === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  writeDescription(mathOperator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
