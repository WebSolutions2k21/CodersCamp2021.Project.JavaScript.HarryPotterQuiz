function saveCurrentPlayerData(currentPlayer) {
  localStorage.setItem('currentPlayer', JSON.stringify(currentPlayer));
}

function getCurrentPlayerData() {
  const playerData = localStorage.getItem('currentPlayer');
  return playerData;
}

function addPointsToCurrentPlayer(pointsToAdd) {
  const currentPlayerJSON = JSON.parse(getCurrentPlayerData());
  currentPlayerJSON.score += pointsToAdd;
  saveCurrentPlayerData(currentPlayerJSON);
}

export { saveCurrentPlayerData, getCurrentPlayerData, addPointsToCurrentPlayer };
