// create new slider with help konstruktor
let slider1 = new Slider();
let slider2 = new Slider();

slider1.start('slider1');
slider2.start('slider2');




// create new slider with help literal object
// let slider1 = sliderFactory.createNewSlider();//в этих переменных находятся объекты
// let slider2 = sliderFactory.createNewSlider();// 

// slider1.start('slider1');
// slider2.start('slider2');



// function Dog(name) {
//    //let this = {};
//    this.myName = name;
//    this.voice = function () {
//       console.log('Hey, my name is ' + this.myName);
//    }
//    //return this;
// };

// let dog2 = {
//    myName: 'chihuahua',
//    voice: function () {
//       console.log('hey hey');
//    }
// };

// // Dog();
// // dog1 = new Dog();
// // dog2.voice();
// dog3 = new Dog('qqqqq');
// dog4 = new Dog('wwwww');

//this ссылается на слайдер, поэтому в start this будет ссылаться на слайдер

// let showPrevBtn = document.querySelector('#show-prev');
// let showNextBtn = document.querySelector('#show-next');
// let slider = document.querySelectorAll('#slide');
// let currentSlider = 0;
// showPrevBtn.disabled = true;

// onSliderDisplay();

// function onSliderDisplay() {
//    for (let i = currentSlider; i < slider.length; i++) {
//       slider[i].style.display = 'none';
//    }
//    slider[0].style.display = 'inline-block';
// }

// showNextBtn.addEventListener('click', onBtnNextClick);
// showPrevBtn.addEventListener('click', onBtnPrevClick);

// function onBtnNextClick() {
//    showPrevBtn.disabled = false;
//    currentSlider++;
//    if (currentSlider === (slider.length - 1)) {
//       showNextBtn.disabled = true;
//    }
//    slider[currentSlider - 1].style.display = 'none';
//    slider[currentSlider].style.display = 'inline-block';
// }

// function onBtnPrevClick() {
//    showNextBtn.disabled = false;
//    currentSlider--;
//    if (currentSlider <= 0) {
//       showPrevBtn.disabled = true;
//    }
//    slider[currentSlider + 1].style.display = 'none';
//    slider[currentSlider].style.display = 'inline-block';

// }





// document.write(car1.isTurnOn);
// car1.start();
// document.write(car1.isTurnOn);





// function onOperationButtonClick(eventObject) {
//    let elementClicked = eventObject.currentTarget;
//    let operation = elementClicked.innerHTML;
//    makeOperation(operation);
// }

// for (let i = 0; i < operationButtons.length; i++) {
//    operationButtons[i].addEventListener('click', onOperationButtonClick);
// }




