// syntatic sugar
// js nu are clase
class Car {
  // notatia 1
  topSpeed = 160;
  topReverseSpeed = -50;
  isTrunkOpen = false;
  areLightsOn = false;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
    return this.speed;
  }

  stop() {
    this.speed = 0;

    console.log(`Viteza noua este: ${this.speed}.`);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
  }

  openTrunk() {
    if (this.isTrunkOpen == false) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    if (this.isTrunkOpen == true) {
      this.isTrunkOpen = false;
    }
  }

  turnLightsOn() {
    if (this.areLightsOn == false) {
      this.areLightsOn = true;
    }
  }

  turnLightsOff() {
    if (this.areLightsOn == true) {
      this.areLightsOn = false;
    }
  }

  flashLights() {
    const self = this;
    self.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

cars.forEach(function (car) {
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();
  console.log(`Viteza noua este ${car.speed} km/h.`);
});
