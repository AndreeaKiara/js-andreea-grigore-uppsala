var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`
Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);
person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`
Folosind o bucla for afiseaza suma anilor animalelor.
`);
var petAgeSum = 0;
for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  petAgeSum += pet.age;
}
console.log(petAgeSum);

console.warn(`
Folosind forEach(), afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);
person.pets.forEach(function (pet) {
  var message = `${pet.name} este ${pet.species} si are ${pet.age} ani.`;

  console.log(message);
});

console.warn(`
Folosind o bucla for, afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);
for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var ageDiff = 2023 - person.birthYear - pet.age;

  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(`
Folosind o bucla for, afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.
`);
for (var i = person.pets.length - 1; i >= 0; i--) {
  console.log(`Animalul meu se numeste ${person.pets[i].name}.`);
}

console.warn(`
Folosind o bucla for, afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” Salveaza primul pet intr-o variabila numita oldestPet si porneste bucla, daca varsta animalului curent din bucla este mai mare decat oldestPet.age, atunci oldestPet devine animalul curent.
`);

for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var oldestPet = 0;
  var ageDiff = 0;

  if (oldestPet < pet.age) {
    oldestPet = pet.age;
  }

  ageDiff = 2023 - person.birthYear - oldestPet;
}
console.log(
  `${pet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(`
Folosind o bucla forEach, afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);
var message = 'Am ';
person.pets.forEach(function (pet, i) {
  var punctuation = ', ';
  var pet = person.pets[i];
  if (i === person.pets.length - 1) {
    punctuation = '.';
  } else if (i === person.pets.length - 2) {
    punctuation = ' si ';
  }

  message += pet.species + punctuation;
});
console.log(message);
