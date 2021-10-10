let display = document.querySelector(".display");
let historyDisplay = document.querySelector(".history");

// display above (works)
function updateDisplay(previousNumber) {
  let history = historyDisplay.innerHTML;
  if (history === "") {
    historyDisplay.innerHTML = `${previousNumber}`;
  } else {
    historyDisplay.innerHTML = `${history}${previousNumber}`;
  }
}

// defining function for on click (works)
function insertNum(value) {
  let previousDisplay = display.innerHTML;
  if (isNaN(value)) {
    let previousNumber = `${previousDisplay}${value}`;
    updateDisplay(previousNumber);
    console.log(previousNumber);
    display.innerHTML = "";
  } else {
    display.innerHTML = `${previousDisplay}${value}`;
  }
}

// calculation (works) *Need to fix: if 1+1+ = :error in console.log
function equal() {
  let previous = historyDisplay.innerHTML;
  let current = display.innerHTML;
  historyDisplay.innerHTML = "";
  display.innerHTML = eval(`${previous}${current}`);
}

// allclear (works)
function allClear() {
  display.innerHTML = "";
  historyDisplay.innerHTML = "";
}

// backspace (works only on .display)
function backspace() {
  let operation = display.innerHTML;
  display.innerHTML = `${operation.slice(0, -1)}`;
}
