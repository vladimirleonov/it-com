let slider2 = {
   showPrevBtn: null,
   showNextBtn: null,
   slider: null,
   currentSlider: 0,
   start: function () {
      let that = this;
      let el = document.querySelector('#slider2');
      this.showPrevBtn = el.querySelector('.show-prev');
      this.showNextBtn = el.querySelector('.show-next');
      this.slider = el.querySelectorAll('.slide');

      this.showPrevBtn.disabled = true;
      this.onSliderDisplay();

      this.showNextBtn.addEventListener('click', function (e) {
         that.onBtnNextClick(e);
      });
      this.showPrevBtn.addEventListener('click', function (e) {
         that.onBtnPrevClick(e);
      });
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