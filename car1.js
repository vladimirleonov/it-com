let car1 = {
   name: 'Reno',
   isTurnOn: false,
   speed: 0,
   color: 'white',
   engine: {
      v: 1.6,
      horsePower: 120,
      isTurnOn: false
   },
   start: function () {
      this.isTurnOn = true;
      this.speed = 40;
      this.engine.isTurnOn = true;
   }
};