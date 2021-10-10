let display = document.querySelector(".display");
let allClearButton = document.querySelector(".all-clear");
let backspaceButton = document.querySelector(".backspace");
let operationButton = document.querySelectorAll(".operation");
let numberButton = document.querySelectorAll(".number");
let equalButton = document.querySelector(".equal");

function updateDisplay(value) {}

function insertNum(value) {
  let previousDisplay = display.innerHTML;
  display.innerHTML = `${previousDisplay}${value}`;
}

// allclear (works)
function allClear() {
  display.innerHTML = "";
}

// backspac (works)
function backspace() {
  let operation = display.innerHTML;
  display.innerHTML = `${operation.slice(0, -1)}`;
}
