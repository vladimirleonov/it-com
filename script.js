let showPrevBtn = document.querySelector('#show-prev');
let showNextBtn = document.querySelector('#show-next');
let slider = document.querySelectorAll('#slide');

let currentSlider = 0;
showNextBtn.addEventListener('click', onBtnNextClick);
showPrevBtn.addEventListener('click', onBtnPrevClick);

function onBtnShow() {
   showNextBtn.disabled = false;
   showPrevBtn.disabled = false;
}

onSliderDisplayNone();
slider[currentSlider].style.display = 'inline-block';

function onSliderDisplayNone() {
   for (let i = currentSlider; i < slider.length; i++) {
      slider[i].style.display = 'none';
   }
}


function onBtnNextClick() {
   onBtnShow();
   currentSlider++;
   if (currentSlider === (slider.length)) {
      // showNextBtn.style.display = 'none';
      showNextBtn.disabled = true;
   }
   else {
      slider[currentSlider - 1].style.display = 'none';
      slider[currentSlider].style.display = 'inline-block';
   }
}

function onBtnPrevClick() {
   onBtnShow();
   currentSlider--;
   if (currentSlider <= 0) {
      // showNextBtn.style.display = 'none';
      showPrevBtn.disabled = true;
   }
   else {
      slider[currentSlider + 1].style.display = 'none';
      slider[currentSlider].style.display = 'inline-block';
   }
}
// function onBtnPrevClick() {
//    i--;
//    slider = slider[i];
// }

// function onSliderShow() {
//    if () {

//    }
//    else () {

//    }
// }


// function onOperationButtonClick(eventObject) {
//    let elementClicked = eventObject.currentTarget;
//    let operation = elementClicked.innerHTML;
//    makeOperation(operation);
// }

// for (let i = 0; i < operationButtons.length; i++) {
//    operationButtons[i].addEventListener('click', onOperationButtonClick);
// }




