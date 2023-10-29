// black box function with no side effects
function createLog(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  return messageContainer;
}

const stage = document.querySelector('.pane .stage');
const logsContainer = document.querySelector('.logs');
let counter = 0;
let edgeCounter = 0;

stage.addEventListener('mouseover', function () {
  const log = createLog('Mouseul este pe scena');
  counter = counter + 1;
  edgeCounter = edgeCounter + 1;

  const counterLog = createLog(`Mouseul a fost pe scena de ${counter} ori.`);
  const edgeCounterLog = createLog(
    `Mouseul a trecut peste laturi de ${edgeCounter} ori.`,
  );
  edgeCounterLog.classList.add('edge-counter-log');
  logsContainer.append(log);
  logsContainer.append(counterLog);
  logsContainer.append(edgeCounterLog);
});

stage.addEventListener('mouseout', function () {
  const log = createLog('Mouseul nu este pe scena');
  edgeCounter = edgeCounter + 1;
  const edgeCounterLog = createLog(
    `Mouseul a trecut peste laturi de ${edgeCounter} ori.`,
  );
  edgeCounterLog.classList.add('edge-counter-log');
  logsContainer.append(log);
  logsContainer.append(edgeCounterLog);
});
