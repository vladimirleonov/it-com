function Car(name) {
   this.name = name;
   this.isTurnOn = false;
   this.speed = 0;
   this.color = 'white';
   this.engine = {
      v: 1.6,
      horsePower: 120,
      isTurnOn: false
   };
   this.start = function () {
      this.isTurnOn = true;
      this.speed = 40;
      this.engine.isTurnOn = true;
   };
}

