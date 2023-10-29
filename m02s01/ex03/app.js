const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: -50,
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed++;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed--;

    this.displaySpeed();
  },

  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  },

  turnLightsOn: function () {
    if (this.areLightsOn == false) {
      this.areLightsOn = true;
    }
  },

  turnLightsOff: function () {
    if (areLightsOn == true) {
      this.areLightsOn = false;
    }
  },

  flashLights: function () {
    const self = this;
    self.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 220;

console.log(audi);

audi.setSpeed(140);
audi.accelerate();
