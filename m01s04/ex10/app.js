var person = {
  name: 'Andreea',
  surname: 'Grigore',
  age: 36,
  petOwner: true,
  skills: [
    'html',
    'Javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  Folosind obiectul person si forEach,
  afiseaza skillurile din pozitiile impare ale arrayului in
  propozitii de forma "Tehnologia xxx se afla pe pozitia iii,
  impara, a arrayului."
`);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(
      'Tehnologia ' +
        skill +
        ' se afla pe pozitia ' +
        index +
        ', impara, a arrayului.',
    );
  }
});

console.warn(`
  In mod similar, afiseaza skillurile care contin
  litera a in propozitii de forma "Tehnologia xxx contine caracterul "a". "
`);
person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    console.log('Tehnologia ' + skill + ' contine litera "a".');
  }
});

console.warn(`
  Folosind forEach, afiseaza propozitia:
  "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';

  if (friends.length - 1 === index) {
    punctuation = '.';
  }

  // scuratura pt message = message + ''
  message += friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);

console.warn(`
Folosind forEach, afiseaza numarul total de ani pe care il
au persoanele din arrayul friends, doar daca au varsta mai mare
decat 30 inclusiv folosind o propozitie de felul:  "Varstele insumate sunt: xxx."
`);
message = 'Varstele insumate sunt: ';
var sumAge = 0;
person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    sumAge += friend.age;
  }
});
console.log(message + sumAge + '.');

console.warn(`
Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.
`);
var sumBirthYear = 0;
person.friends.forEach(function (friend) {
  if (friend.age % 2 !== 0) {
    sumBirthYear += 2023 - friend.age;
  }
});
console.log(sumBirthYear.toString());

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends,
daca aceasta este mai mare sau egala cu 2 ani folosind propozitii de forma:
"Diferenta pentru ${name}:  xxx ani."
`);
var diffAge = 0;
person.friends.forEach(function (friend) {
  diffAge = person.age - friend.age;
  if (diffAge >= 2) {
    console.log(`Diferenta pentru ${friend.name}: ${diffAge} ani.`);
  }
});

console.warn(`
  Afiseaza fraza: "Intre Dragos si Larry este o
  diferenta de xx ani. Intre Dragos si Steven... "
`);
var message = '';
person.friends.forEach(function (friend, index, friends) {
  var ageDiff = Math.abs(person.age - friend.age);
  var punctuation = friends.length - 1 === index ? '.' : '. ';
  // var punctuation = '';
  // if (friends.length - 1 === index) {
  //   punctuation = '.';
  // } else {
  //   punctuation = '. ';
  // }

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani${punctuation}`;
});
console.log(message.trim());

console.warn(`
  Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.
`);

// slice fara parametri creeaza O CLONA
// slice without parameters will CLONE the array
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(`
  Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana,
  folosind o propozitie de forma "{person.name} cunoaste xxx!"
  `);
person.skills.forEach(function (skill) {
  console.log(`${person.name} cunoaste ${skill}!`);
});

console.warn(`
In mod similar, afiseaza skillurile care nu incep cu j in propozitii
de forma "Numele tehnologiei xxx nu incepe cu litera j."
`);
person.skills.forEach(function (skill) {
  if (!skill.startsWith('j')) {
    console.log('Numele tehnologiei ' + skill + ' nu incepe cu litera j.');
  }
});

console.warn(`
Folosind forEach, afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."
`);
message = 'Numele mari ale prietenilor mei sunt ';
person.friends.forEach(function (friend, index) {
  var punctuation = ', ';
  if (person.friends.length - 1 === index) {
    punctuation = '.';
  }
  message += friend.surname + punctuation;
});
console.log(message);

console.warn(`
Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends
`);
sumAge = 0;
person.friends.forEach(function (friend) {
  sumAge += friend.age;
});
console.log(sumAge.toString());

console.warn(`
Folosind forEach, afiseaza suma anilor de nastere a persoanelor
`);
sumBirthYear = 0;
person.friends.forEach(function (friend) {
  sumBirthYear += 2023 - friend.age;
});
console.log(sumBirthYear.toString());

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);
diffAge = 0;
person.friends.forEach(function (friend) {
  diffAge = person.age - friend.age;
  console.log(diffAge);
});

console.warn(`
Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.
`);
person.friends
  .slice()
  .reverse()
  .forEach(function (friend) {
    console.log(friend.name + ' ' + friend.surname);
  });
