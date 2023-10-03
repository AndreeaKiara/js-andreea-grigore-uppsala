function paragraphLog(message) {
  const logContainerClass = 'logs';
  let logContainer = document.querySelector('.logs');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add(logContainerClass);
    document.body.append(logContainer);
  }

  const messageParagraph = document.createElement('p');
  messageParagraph.innerText = message;
  logContainer.append(messageParagraph);
}

console.log = paragraphLog;

console.log('Nu apar in consola');
