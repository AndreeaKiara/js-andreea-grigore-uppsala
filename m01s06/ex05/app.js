(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    let eventBound = true;

    function showAlert() {
      alert('butonul a fost apasat');
    }

    showButton.addEventListener('click', showAlert);
    showMessage('Alerta va fi afisata');

    toggleEventButton.addEventListener('click', function () {
      if (eventBound === true) {
        // scoate event
        showButton.removeEventListener('click', showAlert);
        this.innerText = 'Porneste afisarea';
        showMessage('Alerta NU va fi afisata');
        eventBound = false;
      } else {
        // adauga event
        showButton.addEventListener('click', showAlert);
        this.innerText = 'Opreste afisarea';
        showMessage('Alerta va fi afisata');
        eventBound = true;
      }
    });

    removeButtons.addEventListener('click', function () {
      const confirmed = confirm(
        'Esti sigur ca vrei sa stergi butoanele din DOM?',
      );
      if (confirmed) {
        showButton.remove();
        toggleEventButton.remove();
        removeButtons.remove();
        showMessage('Butoanele au fost eliminate');
      }
    });

    function showMessage(message) {
      let paragraphElement = document.querySelector('.message');

      if (paragraphElement == null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add('message');
        document.body.append(paragraphElement);
      }

      paragraphElement.innerText = message;
    }
  });
})();
