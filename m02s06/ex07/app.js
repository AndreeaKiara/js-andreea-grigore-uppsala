document.addEventListener('DOMContentLoaded', () => {
  const renderPersons = (persons) => {
    const section = document.getElementsById('personsDisplay');
    section.innerHTML = '';

    persons.forEach((person) => {
      // destructure
      // const name = person.name;
      const { name, surname } = person;

      const p = document.createElement('p');
      p.innerText = `${name} ${surname}`;

      section.append(p);
    });
  };

  const getPersons = () => {
    return fetch('http://localhost:8080/persons');
  };

  renderPersons([
    {
      name: 'Andreea',
      surname: 'Grigore',
    },
  ]);
});
