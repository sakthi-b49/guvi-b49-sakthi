
let expression = '';
const displayElement = document.getElementById('display');


function updateDisplay() {
  displayElement.value = expression;
}

function handleKeyPress(key) {
  if (/[0-9.]/.test(key)) {
    expression += key;
    updateDisplay();
  } else if (/[\/*\-+]/.test(key)) {
    expression += ` ${key} `;
    updateDisplay();
  } else {
    alert('Only numbers are allowed');
  }
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    alert('Invalid expression');
  }
}
