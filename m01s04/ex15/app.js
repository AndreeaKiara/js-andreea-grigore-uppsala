var person = {
  name: 'Andreea',
  surname: 'Grigore',
  age: 25,
  petOwner: true,
  skills: [
    'html',
    'javascript',
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
Folosind fisierele de la exercitiul 06 si doua bucle for imbricate (nested), afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
Poti folosi metoda pentru a converti numerele negative in pozitive.
`);
var ageDiff = 0;
for (var i = 0; i < person.friends.length; i++) {
  var firstFriend = person.friends[i];

  for (var j = 0; j < person.friends.length; j++) {
    if (i !== j) {
      var secondFriend = person.friends[j];

      ageDiff = Math.abs(firstFriend.age - secondFriend.age);

      console.log(
        `Intre ${firstFriend.name} si ${secondFriend.name} este o diferenta de ${ageDiff} ani.`,
      );
    }
  }
}
