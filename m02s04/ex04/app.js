document.addEventListener('DOMContentLoaded', function () {
  // scoatem form din dom
  const personForm = document.getElementById('personForm');

  // instantiam un pristine
  const pristine = new Pristine(personForm);
  // validam la submit
  personForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const valid = pristine.validate();
    const form = event.currentTarget;

    if (valid) {
      const data = {
        name: form.name.value,
        surname: form.surname.value,
        age: form.age.value,
        email: form.email.value,
      };

      console.log('send to server', data);
    }
  });
});
