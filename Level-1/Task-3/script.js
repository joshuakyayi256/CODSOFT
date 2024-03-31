const calculator = document.querySelector('.calculator');
const display = document.getElementById('display');
const buttonsContainer = document.getElementById('buttons');

const themes = {
  light: {
    bg: '#fff',
    buttonBg: '#e0e0e0',
    buttonHoverBg: '#ccc',
    textColor: '#000'
  },
  dark: {
    bg: '#222',
    buttonBg: '#444',
    buttonHoverBg: '#666',
    textColor: '#fff'
  }
};

let currentTheme = 'light';
applyTheme(themes[currentTheme]);

function createButton(text, handler) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', handler);
  return button;
}

function updateDisplay(value) {
  display.textContent = value;
}

function appendToDisplay(value) {
  display.textContent += value;
}

function clearDisplay() {
  updateDisplay('');
}

function calculateResult() {
  try {
    const result = Function('"use strict";return (' + display.textContent + ')')();
    updateDisplay(result);
  } catch (error) {
    updateDisplay('Error');
  }
}

function applyTheme(theme) {
  calculator.style.backgroundColor = theme.bg;
  display.style.backgroundColor = theme.textColor;
  display.style.color = theme.buttonBg;
  buttonsContainer.style.backgroundColor = theme.bg;
  buttonsContainer.style.color = theme.textColor;

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.style.backgroundColor = theme.buttonBg;
    button.style.color = theme.textColor;
  });
}

function changeTheme(themeName) {
  currentTheme = themeName;
  applyTheme(themes[currentTheme]);
}

// Create buttons
buttonsContainer.appendChild(createButton('C', clearDisplay));
buttonsContainer.appendChild(createButton('7', () => appendToDisplay('7')));
buttonsContainer.appendChild(createButton('8', () => appendToDisplay('8')));
buttonsContainer.appendChild(createButton('9', () => appendToDisplay('9')));
buttonsContainer.appendChild(createButton('/', () => appendToDisplay('/')));
buttonsContainer.appendChild(createButton('4', () => appendToDisplay('4')));
buttonsContainer.appendChild(createButton('5', () => appendToDisplay('5')));
buttonsContainer.appendChild(createButton('6', () => appendToDisplay('6')));
buttonsContainer.appendChild(createButton('*', () => appendToDisplay('*')));
buttonsContainer.appendChild(createButton('1', () => appendToDisplay('1')));
buttonsContainer.appendChild(createButton('2', () => appendToDisplay('2')));
buttonsContainer.appendChild(createButton('3', () => appendToDisplay('3')));
buttonsContainer.appendChild(createButton('-', () => appendToDisplay('-')));
buttonsContainer.appendChild(createButton('0', () => appendToDisplay('0')));
buttonsContainer.appendChild(createButton('.', () => appendToDisplay('.')));
buttonsContainer.appendChild(createButton('+', () => appendToDisplay('+')));
buttonsContainer.appendChild(createButton('=', calculateResult));
buttonsContainer.appendChild(createButton('Light', () => changeTheme('light')));
buttonsContainer.appendChild(createButton('Dark', () => changeTheme('dark')));