/* eslint-disable spaced-comment */
import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';
import { getCurrentPlayerData } from '../localStorageManager';

const createResultPage = () => {
  const appScreen = document.querySelector('#root');
  const resultPage = document.querySelector('#resultPage');

  appScreen.innerHTML = resultPage.innerHTML;

  mapNavigationClickToTemplate('[data-action-start]', paths.gameMode);
  mapNavigationClickToTemplate('[data-action-scores]', paths.ranking);
  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createResultPage;

//------------------------------------------------

function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem('allPlayers'));
}

function filterPlayers(category) {
  // console.log(category);
  const categorizedPlayers = [];
  const players = getDataFromLocalStorage();
  // console.log(players);
  if (players) {
    players.forEach((player) => {
      const singleArrayElement = player;
      if (singleArrayElement) {
        if (singleArrayElement.category === category) {
          categorizedPlayers.push(singleArrayElement);
          // console.log('dodało gracza');
        }
      }
    });
  }
  return categorizedPlayers;
}
function sortPlayers(category) {
  const filter = filterPlayers(category);
  // console.log(filter);
  return filter.sort((a, b) => b.score - a.score);
}

function savePlayerToLocaleStorage(player) {
  const allPlayers = [];
  if (getDataFromLocalStorage()) {
    getDataFromLocalStorage().forEach((values) => allPlayers.push(values));
  }
  allPlayers.push(JSON.parse(player));
  localStorage.setItem('allPlayers', JSON.stringify(allPlayers));
}

// należy dodawać curretPlayerData w momencie gdy skończy się czas
// lub klikniety będzie koniec prowadzący do resultPage

savePlayerToLocaleStorage(getCurrentPlayerData());
// console.log(filterPlayers('houses'));
// console.log(filterPlayers('students'));
// console.log(sortPlayers('students'));

function importBestPlayersToHtml() {
  const currentPlayer = JSON.parse(getCurrentPlayerData());
  let bestPlayers = [];
<<<<<<< HEAD
if (currentPlayer) {
  if (currentPlayer.category === 'houses') {
    bestPlayers = sortPlayers(currentPlayer.category);
    console.log('gracz gra w houses');
  } else if (currentPlayer.category === 'staff') {
    bestPlayers = sortPlayers(currentPlayer.category);
    console.log('gracz gra w staff');
  } else if (currentPlayer.category === 'students') {
    bestPlayers = sortPlayers(currentPlayer.category);
    console.log('gracz gra w students');
  }
  console.log(bestPlayers[0].category);

  // const listHandler = document.querySelector('#resultPage__bestScores--list');
  const resultPage = document.getElementById('resultPage');
  const resultPageContent = resultPage.content;
  // const listContent = resultPageContent.firstChild;
  // const selected = document.getElementById('abcd');
=======
  if (currentPlayer) {
    if (currentPlayer.category === 'houses') {
      bestPlayers = sortPlayers(currentPlayer.category);
      console.log('gracz gra w houses');
    } else if (currentPlayer.category === 'staff') {
      bestPlayers = sortPlayers(currentPlayer.category);
      console.log('gracz gra w staff');
    } else if (currentPlayer.category === 'students') {
      bestPlayers = sortPlayers(currentPlayer.category);
      console.log('gracz gra w students');
    }
    console.log(bestPlayers[0].category);

    // const listHandler = document.querySelector('#resultPage__bestScores--list');
    const resultPage = document.getElementById('resultPage');
    const resultPageContent = resultPage.content;
    // const listContent = resultPageContent.firstChild;
    // const selected = document.getElementById('abcd');
>>>>>>> 991ea0fbd41829e526171cd083e3460932e8891a

    console.log(resultPageContent);
  }
}
<<<<<<< HEAD
}

=======
>>>>>>> 991ea0fbd41829e526171cd083e3460932e8891a
importBestPlayersToHtml();
