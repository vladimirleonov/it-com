let plusId = '#plus';
let minusId = '#minus';
let multiplyId = '#multiply';
let divideId = '#divide';
let number1Id = '#number1';
let number2Id = '#number2';
let resultId = '#result';

let plusEl = document.querySelector(plusId);
let minusEl = document.querySelector(minusId);
let multiplyEl = document.querySelector(multiplyId);
let divideEl = document.querySelector(divideId);
let number1El = document.querySelector(number1Id);
let number2El = document.querySelector(number2Id);
let resultEl = document.querySelector(resultId);

function onPlusClick() {
   let resultNumber1 = Number(number1El.value);
   let resultNumber2 = Number(number2El.value);
   resultEl.value = resultNumber1 + resultNumber2;
}
function onMinusClick() {
   let resultNumber1 = Number(number1El.value);
   let resultNumber2 = Number(number2El.value);
   resultEl.value = resultNumber1 - resultNumber2;
}
function onMultiplyClick() {
   let resultNumber1 = Number(number1El.value);
   let resultNumber2 = Number(number2El.value);
   resultEl.value = resultNumber1 * resultNumber2;
}
function onDivideClick() {
   let resultNumber1 = Number(number1El.value);
   let resultNumber2 = Number(number2El.value);
   resultEl.value = resultNumber1 / resultNumber2;
}

plusEl.addEventListener('click', onPlusClick);
minusEl.addEventListener('click', onMinusClick);
multiplyEl.addEventListener('click', onMultiplyClick);
divideEl.addEventListener('click', onDivideClick);


