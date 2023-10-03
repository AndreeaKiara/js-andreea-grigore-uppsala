var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMessage = 'Nu s-a introdus un numar';
var paragraphElement = document.getElementById('message');

if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMessage);
} else if (number === 20) {
  var message = `Numarul este egal cu 20`;
  console.log(message);
  paragraphElement.innerText = message;
} else if (number > 20) {
  var message = `Numarul este mai mare decat 20`;
  console.log(message);
  paragraphElement.innerText = message;
} else {
  var message = `Numarul este mai mic decat 20`;
  console.log(message);
  paragraphElement.innerText = message;
}
