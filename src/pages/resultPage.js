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

function filterPlayers(players, housesPlayers, studentsPlayers, staffPlayers) {
  players.forEach((allPlayers) => {
    const singleArrayElement = JSON.parse(allPlayers);
    if (singleArrayElement) {
      if (singleArrayElement.category === 'houses') {
        housesPlayers.push(singleArrayElement);
      } else if (singleArrayElement.category === 'students') {
        studentsPlayers.push(singleArrayElement);
      } else if (singleArrayElement.category === 'staff') {
        staffPlayers.push(singleArrayElement);
      }
    }
  });
}

function sortArrays(housesPlayers, studentsPlayers, staffPlayers) {
  housesPlayers.sort((a, b) => b.score - a.score);
  studentsPlayers.sort((a, b) => b.score - a.score);
  staffPlayers.sort((a, b) => b.score - a.score);
}
const players = [];
const housesPlayers = [];
const studentsPlayers = [];
const staffPlayers = [];

if (getDataFromLocalStorage()) {
  getDataFromLocalStorage().forEach((values) => players.push(values));
}
// eslint-disable-next-line max-len
// należy dodawać curretPlayerData w momencie gdy skończy się czas lub klikniety będzie koniec prowadzący do resultPage

players.push(getCurrentPlayerData());

localStorage.setItem('allPlayers', JSON.stringify(players));

filterPlayers(players, housesPlayers, studentsPlayers, staffPlayers);
sortArrays(housesPlayers, studentsPlayers, staffPlayers);
console.log(housesPlayers);
console.log(studentsPlayers);
