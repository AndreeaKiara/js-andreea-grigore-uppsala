const person = {
  getName: function () {
    return 'Dragos Iordache';
  },

  getAge: function () {
    return 32;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.warn(`
  Folosind accesorul, salveaza numele
  mic al persoanei intr-o variabila si
  foloseste-l in propozitia: “Eu sunt xxx.”
`);
console.log(`Eu sunt ${accessor('Name')}.`);

console.warn(`
  Afiseaza anul de nastere al persoanei folosind anul curent.
`);
const curentYear = new Date().getFullYear();
console.log((curentYear - accessor('Age')).toString());
