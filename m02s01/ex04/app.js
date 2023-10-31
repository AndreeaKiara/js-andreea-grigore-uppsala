// avem nevoie de o clasa Car
// care atunci cand este instantiata
// si se ruleaza metoda .render()
// sa afiseze in DOM masinuta cu proprietatile specificate
// pozitie (top left) color pentru culoare

// new Car(100, 200, purple)
// left: 100; top: 200; background: purple;

class Car {
  constructor(
    left = 10,
    top = 10,
    color = 'black',
    wheelColor = 'black',
    wheelCapColor = 'white',
  ) {
    this.positionX = left;
    this.positionY = top;
    this.color = color;
    this.wheelColor = wheelColor;
    this.wheelCapColor = wheelCapColor;
    this.areHazardsOn = false;
    this.hazardInterval = null;

    this.frame = this.e('div');
    this.frame.classList.add('frame');
    this.frame.style.left = this.positionX + 'px';
    this.frame.style.top = this.positionY + 'px';

    this.car = this.e('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = this.e('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    this.carBody = this.e('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    this.lightFront = this.e('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.lightBack = this.e('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.wheelFront = this.e('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);

    this.hubCapFront = this.e('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = this.e('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.hubCapBack = this.e('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);
  }

  e(elementType = 'div') {
    // wrapper pentru document.createElement

    return document.createElement(elementType);
  }

  turnLightOn() {
    this.lightFront.classList.add('light--on');

    return this;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');

    return this;
  }

  engageBreak() {
    this.lightBack.classList.add('light--back');
  }

  disengageBreak() {
    this.lightBack.classList.remove('light--back');
  }

  toggleHazards() {
    if (this.areHazardsOn) {
      this.disengageBreak();
      this.areHazardsOn = false;
    } else {
      this.engageBreak();
      this.areHazardsOn = true;

      this.hazardInterval = setInterval(() => {
        if (this.areHazardsOn) {
          this.disengageBreak();
        } else {
          this.engageBreak();
        }
        this.areHazardsOn = !this.areHazardsOn;
      }, 500);
    }
  }

  stopHazards() {
    if (this.hazardInterval) {
      clearInterval(this.hazardInterval);
      this.hazardInterval = null;
    }
    this.areHazardsOn = false;
  }

  move(left, top) {
    const positionX = Number(left);
    const positionY = Number(top);

    if (!isNaN(positionX)) {
      this.frame.style.left = positionX + 'px';
    }

    if (!isNaN(positionY)) {
      this.frame.style.top = positionY + 'px';
    }
  }

  render() {
    // only touch the DOM at the last moment

    this.wheels = this.frame.querySelectorAll('.car__wheel');
    this.wheels.forEach((wheel) => {
      wheel.style.backgroundColor = this.wheelColor;
    });

    this.wheels = this.frame.querySelectorAll('.wheel__cap');
    this.wheels.forEach((cap) => {
      cap.style.backgroundColor = this.wheelCapColor;
    });
    document.body.append(this.frame);

    return this;
  }
}

const purpleCar = new Car(200, 300, 'purple', 'blue', 'white').render();
// new Date().getFullYear();

purpleCar.toggleHazards();
setTimeout(() => {
  purpleCar.stopHazards();
}, 5000);
