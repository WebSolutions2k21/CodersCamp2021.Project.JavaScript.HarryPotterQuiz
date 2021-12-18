function saveCurrentPlayerData(currentPlayer) {
  localStorage.setItem('currentPlayer', JSON.stringify(currentPlayer));
}

function getCurrentPlayerData() {
  let playerData = localStorage.getItem('currentPlayer');
  return playerData;
}

function addPointsToCurrentPlayer(pointsToAdd) {
  let currentPlayerJSON = JSON.parse(getCurrentPlayerData());
  currentPlayerJSON.score = currentPlayerJSON.score + pointsToAdd;
  saveCurrentPlayerData(currentPlayerJSON);
}

export { saveCurrentPlayerData, getCurrentPlayerData, addPointsToCurrentPlayer };
