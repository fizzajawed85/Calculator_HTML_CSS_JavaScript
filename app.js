let displayBox = document.getElementById('display');

function display(val) {
  displayBox.value += val;
}

function clearAll() {
  displayBox.value = '';
}

function calculate() {
  if (displayBox.value.trim() !== '') {
    displayBox.value = eval(displayBox.value);
  }
}

function squareRoot() {
  if (displayBox.value.trim() !== '') {
    displayBox.value = Math.sqrt(eval(displayBox.value));
  }
}
