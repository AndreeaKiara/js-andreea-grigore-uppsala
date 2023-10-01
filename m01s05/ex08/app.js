const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');
const askAge = document.getElementById('query');
const paragraphElement = document.getElementById('message');

function clickHandler() {
  alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

askAge.addEventListener('click', function () {
  let userAge = prompt('Cati ani ai?');

  paragraphElement.innerText = `Ai ${userAge} ani.`;
});
