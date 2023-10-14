console.warn(`
Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.
`);
function calculateSurface(...args) {
  switch (args.length) {
    case 1:
      return squareSurface(args[0]);
    case 2:
      return surface(args[0], args[1]);
    case 3:
      return parallelepipedSurface(args[0], args[1], args[2]);
    default:
      console.log('Invalid no of arguments.');
      return 0;
  }
}

function surface(width, length) {
  return width * length;
}

function squareSurface(length) {
  return surface(length, length);
}

function parallelepipedSurface(width, length, height) {
  return 2 * (width * length + length * height + height * width);
}

console.log(calculateSurface(2));
console.log(calculateSurface(6, 7));
console.log(calculateSurface(20, 15, 5));

console.warn(`
Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
`);
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`
Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
`);
const pet = {
  getName: function () {
    return 'Felix';
  },
  getSpecies: function () {
    return 'pisica';
  },
  getAge: function () {
    return 7;
  },
};

function accessor(methodSuffix) {
  const methodName = 'get' + methodSuffix;
  return pet[methodName]();
}

const petAge = accessor('Age');

console.log(
  `${accessor('Name')} este ${accessor('Species')} si are ${accessor(
    'Age',
  )} ani.`,
);

console.log(`Animalul meu are ${petAge} ani.`);
