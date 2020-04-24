let plusEl = document.querySelector('#plus');
let minusEl = document.querySelector('#minus');
let multiplyEl = document.querySelector('#multiply');
let divideEl = document.querySelector('#divide');

function makeOperation(operation) {
   let number1El = document.querySelector('#number1');
   let number2El = document.querySelector('#number2');
   let resultEl = document.querySelector('#result');

   let resultNumber1 = Number(number1El.value);
   let resultNumber2 = Number(number2El.value);

   if (operation === '+') {
      resultEl.value = resultNumber1 + resultNumber2;
   }
   else if (operation === '-') {
      resultEl.value = resultNumber1 - resultNumber2;
   }
   else if (operation === '*') {
      resultEl.value = resultNumber1 * resultNumber2;
   }
   else if (operation === '/') {
      resultEl.value = resultNumber1 / resultNumber2;
   }
   else {
      resultEl.value = 'operation not found';
   }
}

function onButtonPlus() {
   makeOperation('+');
}

function onButtonMinus() {
   makeOperation('-');
}

function onButtonMultiply() {
   makeOperation('*');
}

function onButtonDivide() {
   makeOperation('/');
}

plusEl.addEventListener('click', onButtonPlus);
minusEl.addEventListener('click', onButtonMinus);
multiplyEl.addEventListener('click', onButtonMultiply);
divideEl.addEventListener('click', onButtonDivide);


