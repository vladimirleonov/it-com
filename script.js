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
      resultEl.value = 'operation is unknown';
   }
}

function onOperationButtonClick(eventObject) {
   let elementClicked = eventObject.currentTarget;
   let operation = elementClicked.innerHTML;
   makeOperation(operation);
}

plusEl.addEventListener('click', onOperationButtonClick);
minusEl.addEventListener('click', onOperationButtonClick);
multiplyEl.addEventListener('click', onOperationButtonClick);
divideEl.addEventListener('click', onOperationButtonClick);


