const button = document.querySelector('.btn');

function onClick() {
  alert('butonul a fost apasat');
}

button.addEventListener('click', onClick);

// debounce or not debounce
window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth < 650) {
    button.removeEventListener('click', onClick);
  } else {
    button.addEventListener('click', onClick);
  }
});
