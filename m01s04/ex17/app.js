var services = [
  {
    name: 'Mailchimp',
    adoption: 2010,
  },
  {
    name: 'Google Analytics',
    adoption: 2009,
  },
  {
    name: 'Stripe',
    adoption: 2020,
  },
  {
    name: 'Hotjar',
    adoption: 2021,
  },
  {
    name: 'Sendgrid',
    adoption: 2022,
  },
];

console.warn(`
Folosind for
Afiseaza in consola propozitia “Siteul foloseste urmatoarele servicii: a, b, c, d si e.”
`);
var message = 'Siteul foloseste urmatoarele servicii: ';
var punctuation = ', ';
for (var i = 0; i < services.length; i++) {
  if (i === services.length - 1) {
    punctuation = '.';
  } else if (i === services.length - 2) {
    punctuation = ' si ';
  }
  message = message + services[i].name + punctuation;
}
console.log(message);

console.warn(`
Afiseaza doar numele serviciilor integrate dupa 2020 intr-o propozitie de forma “Serviciile a, b, c au fost adoptate dupa 2020 inclusiv.”
`);
message = 'Serviciile ';
punctuation = ', ';
for (var i = 0; i < services.length; i++) {
  if (services[i].adoption >= 2020) {
    message += services[i].name + punctuation;
  }
}
message =
  message.slice(0, -punctuation.length) +
  ' au fost adoptate dupa 2020 inclusiv.';
console.log(message);

console.warn(`
Afiseaza doar pentru serviciile de pe pozitii pare, cate una pe linie, propozitii de forma “Serviciul se numeste xxx si a fost integrat in yyyy.”
`);
for (var i = 0; i < services.length; i++) {
  if (i % 2 == 0) {
    console.log(
      `Serviciul se numeste ${services[i].name} si a fost integrat in ${services[i].adoption}.`,
    );
  }
}

console.warn(`
Folosind anul curent afiseaza propozitii de forma “Siteul foloseste serviciul xxx de yyy ani.”
`);
var usedFor = 0;
for (var i = 0; i < services.length; i++) {
  usedFor = 2023 - services[i].adoption;
  console.log(
    `Siteul foloseste serviciul ${services[i].name} de ${usedFor} ani.`,
  );
}

console.warn(`
Gaseste cel mai vechi serviciu si afiseaza o propozitie de forma “Folosim xxx de yyy ani.”
`);

for (var i = 1; i < services.length; i++) {
  var service = services[i];
  var oldestService = services[0].adoption;
  var usedFor = 0;

  if (oldestService > services[i].adoption) {
    oldestService = services[i].adoption;
  }

  usedFor = 2023 - oldestService;
}
console.log(`Folosim ${service.name} de ${usedFor} ani.`);
