let slider = {
   showPrevBtn: document.querySelector('#show-prev'),
   showNextBtn: document.querySelector('#show-next'),
   slider: document.querySelectorAll('#slide'),
   currentSlider: 0,
   start: function () {
      this.showPrevBtn.disabled = true;
      this.onSliderDisplay();

      this.showNextBtn.addEventListener('click', this.onBtnNextClick);
      this.showPrevBtn.addEventListener('click', this.onBtnPrevClick);
   },
   onSliderDisplay: function (e) {
      for (let i = this.currentSlider; i < this.slider.length; i++) {
         this.slider[i].style.display = 'none';
      }
      this.slider[0].style.display = 'inline-block';
   },
   onBtnPrevClick: function (e) {
      this.showNextBtn.disabled = false;
      this.currentSlider--;
      if (this.currentSlider <= 0) {
         this.showPrevBtn.disabled = true;
      }
      this.slider[this.currentSlider + 1].style.display = 'none';
      this.slider[this.currentSlider].style.display = 'inline-block';
   },
   onBtnNextClick: function (e) {
      this.showPrevBtn.disabled = false;
      this.currentSlider++;
      if (this.currentSlider === (this.slider.length - 1)) {
         this.showNextBtn.disabled = true;
      }
      this.slider[this.currentSlider - 1].style.display = 'none';
      this.slider[this.currentSlider].style.display = 'inline-block';
   }
}