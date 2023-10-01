var cart = {
  name: 'Andreea',
  surname: 'Grigore',
  email: 'andreea.mail@mail.ro',
  products: [
    {
      category: 'PC and Laptop',
      name: 'Mouse',
      price: 200,
      quantity: 2,
      weight: 100,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard Mat',
      price: 119,
      quantity: 1,
      weight: 90,
    },
    {
      category: 'Mobile',
      name: 'USB Multicharger',
      price: 150,
      quantity: 3,
      weight: 15,
    },
    {
      category: 'PC and Laptop',
      name: 'Keyboard',
      price: 480,
      quantity: 1,
      weight: 280,
    },
    {
      category: 'Mobile',
      name: 'Phone dock',
      price: 200,
      quantity: 2,
      weight: 350,
    },
    {
      category: 'Home',
      name: 'Picture Frame',
      price: 800,
      quantity: 1,
      weight: 150,
    },
  ],
};

console.warn(`
Folosind forEach()
Afiseaza in consola propozitia: “name surname are x tipuri de produse in cart.”
`);
cart.products.forEach(function (product) {
  message = `${cart.name} ${cart.surname} are ${product.length} tipuri de produse in cart.`;
});
console.log(message);

console.warn(`
Afiseaza propozitia: “name are urmatoarele produse in cart: a, b, c, d, e si f.”
`);
var message = cart.name + ' are urmatoarele produse in cart: ';
cart.products.forEach(function (product, i) {
  var product = cart.products[i];
  var punctuation = ', ';
  if (i === cart.products.length - 1) {
    punctuation = '.';
  } else if (i === cart.products.length - 2) {
    punctuation = ' si ';
  }

  message = message + product.name + punctuation;
});
console.log(message);

console.warn(`
Afiseaza propozitia “Valoarea totala a cartului lui name este xxx.”
`);
message = 'Valoarea totala a cartului lui ' + cart.name + ' este ';
var cartValue = 0;
cart.products.forEach(function (product, i) {
  var product = cart.products[i];

  cartValue += product.price * product.quantity;
});
console.log(message + cartValue + '.');

console.warn(`
Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”
`);
message = 'Greutatea totala a cartului lui ' + cart.name + ' este ';
var cartWeight = 0;
cart.products.forEach(function (product, i) {
  var product = cart.products[i];

  cartWeight += product.weight * product.quantity;
});
console.log(message + cartWeight + '.');

console.warn(`
Afiseaza propozitia “Name isi cumpara un total de xxx produse.”
`);
var cartTotal = 0;
message = '';
cart.products.forEach(function (product, i) {
  var product = cart.products[i];

  cartTotal += product.quantity;
  message = cart.name + ' isi cumpara un total de ' + cartTotal + ' produse.';
});
console.log(message);

console.warn(`
Afiseaza propozitia “Cartul contine produse din categoria Mobile in valoare totala de xxx.”
`);
cartValue = 0;
message = 'Cartul contine produse din categoria Mobile in valoare totala de ';
cart.products.forEach(function (product, i) {
  var product = cart.products[i];

  if (product.category === 'Mobile') {
    cartValue += product.price * product.quantity;
  }
});
console.log(message + cartValue + '.');

console.warn(`
Afiseaza propozitia “Greutatea totala a produselor din categoria Mobile este xxx.”
`);
cartWeight = 0;
message = 'Greutatea totala a produselor din categoria Mobile este ';
cart.products.forEach(function (product, i) {
  var product = cart.products[i];

  if (product.category === 'Mobile') {
    cartWeight += product.weight * product.quantity;
  }
});
console.log(message + cartWeight + '.');

console.warn(`
Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”
`);
var cartTotalPrice = 0;
message = 'Totalul pretului per produs din cart este ';
cart.products.forEach(function (product, i) {
  var product = cart.products[i];

  cartTotalPrice += product.price;
});
console.log(message + cartTotalPrice + '.');

console.warn(`
Defineste o variabila numita maximumBudget de tip number cu o valoare arbitrara pozitiva.
`);
var maximumBudget = 1300;

console.warn(`
Afiseaza propozitia: “Nume prenume isi permite | nu isi permite cartul.” In functie de
`);

console.warn(`
Defineste o variabila numita maximumWeight de tip number cu o valoare arbitrara pozitiva.
`);
var maximumWeight = 400;

console.warn(`
Afiseaza propozitia “Firma de curierat poate | nu poate livra comanda.” In functie de greutatea totala a produselor din cart.
`);
