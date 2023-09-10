var person = {
  firstName: 'Andreea',
  lastName: 'Grigore',
  email: 'email@email.com',
  birthYear: 1997,
  pets: [
    {
      name: 'Felix',
      species: 'tomberonez',
      age: 7,
    },
    {
      name: 'Mika',
      species: 'tomberonez',
      age: 10,
    },
    {
      name: 'Oscar',
      species: 'Border Collie',
      age: 11,
    },
  ],
  zipCode: '123456',
};

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. `,
);
console.log(
  `Numele meu este: ${person.firstName} ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este tomberonez si are 10 ani.`,
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent), anul de nastere al animalului de pe indexul 2. `,
);
console.log((2023 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`,
);

var difference = 2023 - person.birthYear - person.pets[0].age;
console.log(difference.toString());

console.warn(
  `Salveaza numele animalului de pe indexul 0 intr-o variabila numita petName. `,
);
petName = person.pets[0].name;
console.log(petName);

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

console.warn(`Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
`);
console.log(
  `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name} si ${person.pets[2].name} locuiesc toti in aceeasi casa.`,
);

console.warn(
  `Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 `,
);
console.log(person.pets[2].age - person.pets[0].age);

console.warn(`Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
`);
console.log(
  `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`,
);

console.warn(
  `Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. `,
);
console.log(
  `Animalele mele s-au nascut in ${2023 - person.pets[0].age}, ${
    2023 - person.pets[1].age
  }, respectiv ${2023 - person.pets[2].age}.`,
);
