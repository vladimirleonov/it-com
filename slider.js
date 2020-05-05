// create new slider with help konstruktor
function Slider() {
   this.imageUrls = [];
   this.currentImageIndex = 0;
   this.showPrevBtn = null;
   this.showNextBtn = null;
   this.slideImg = null;

   this.start = function (elId) {
      let that = this;

      let el = document.querySelector('#' + elId);

      this.showPrevBtn = el.querySelector('.show-prev');
      this.showNextBtn = el.querySelector('.show-next');
      this.slideImg = el.querySelector('.slide');

      this.imageUrls.push('img/image1.jpg');
      this.imageUrls.push('img/image2.jpg');
      this.imageUrls.push('img/image3.jpg');

      this.showPrevBtn.disabled = true;
      this.slideImg.src = this.imageUrls[this.currentImageIndex];

      this.showNextBtn.addEventListener('click', function (e) {
         that.onBtnNextClick(e);
      });
      this.showPrevBtn.addEventListener('click', function (e) {
         that.onBtnPrevClick(e);
      });
   };
   this.onBtnPrevClick = function (e) {
      this.currentImageIndex--;
      this.showNextBtn.disabled = false;
      this.slideImg.src = this.imageUrls[this.currentImageIndex];
      if (this.currentImageIndex <= 0) {
         this.showPrevBtn.disabled = true;
      }
   };
   this.onBtnNextClick = function (e) {
      this.currentImageIndex++;
      this.showPrevBtn.disabled = false;
      this.slideImg.src = this.imageUrls[this.currentImageIndex];
      if (this.currentImageIndex === (this.imageUrls.length - 1)) {
         this.showNextBtn.disabled = true;
      }
   };
}

// create new slider with help literal object
// let sliderFactory = {
//    createNewSlider: function () {
//       let newSlider = {
//          imageUrls: [],
//          currentImageIndex: 0,

//          showPrevBtn: null,
//          showNextBtn: null,
//          slideImg: null,

//          start: function (elId) {
//             let that = this;

//             let el = document.querySelector('#' + elId);

//             this.showPrevBtn = el.querySelector('.show-prev');
//             this.showNextBtn = el.querySelector('.show-next');
//             this.slideImg = el.querySelector('.slide');

//             this.imageUrls.push('img/image1.jpg');
//             this.imageUrls.push('img/image2.jpg');
//             this.imageUrls.push('img/image3.jpg');

//             this.showPrevBtn.disabled = true;
//             this.slideImg.src = this.imageUrls[this.currentImageIndex];

//             this.showNextBtn.addEventListener('click', function (e) {
//                that.onBtnNextClick(e);
//             });
//             this.showPrevBtn.addEventListener('click', function (e) {
//                that.onBtnPrevClick(e);
//             });
//          },
//          onBtnPrevClick: function (e) {
//             this.currentImageIndex--;
//             this.showNextBtn.disabled = false;
//             this.slideImg.src = this.imageUrls[this.currentImageIndex];
//             if (this.currentImageIndex <= 0) {
//                this.showPrevBtn.disabled = true;
//             }
//          },
//          onBtnNextClick: function (e) {
//             this.currentImageIndex++;
//             this.showPrevBtn.disabled = false;
//             this.slideImg.src = this.imageUrls[this.currentImageIndex];
//             if (this.currentImageIndex === (this.imageUrls.length - 1)) {
//                this.showNextBtn.disabled = true;
//             }
//          }
//       }
//       return newSlider;
//    }
// }

