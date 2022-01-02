/* eslint-disable spaced-comment */
import i18next from '../i18n';
import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';
import { getCurrentPlayerData, saveCurrentPlayerData } from '../localStorageManager';

const createResultPage = () => {
  const appScreen = document.querySelector('#root');
  const resultPage = document.querySelector('#resultPage');
  const { t, changeLanguage } = i18next;

  appScreen.innerHTML = resultPage.innerHTML;

  document.querySelector('[data-lang-rankingPage-header]').innerText = t('rankingPage-header');
  document.querySelector('[data-action-back]').innerText = t('back');
  document.querySelector('[data-action-play_again]').innerText = t('play_again');
  mapNavigationClickToTemplate('[data-action-start]', paths.gameMode);
  mapNavigationClickToTemplate('[data-action-home]', paths.home);

  // add to localStorage

  function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('allPlayers'));
  }

  function filterPlayers(category) {
    const categorizedPlayers = [];
    const players = getDataFromLocalStorage();

    if (players) {
      players.forEach((player) => {
        const singleArrayElement = player;
        if (singleArrayElement) {
          if (singleArrayElement.category === category) {
            categorizedPlayers.push(singleArrayElement);
          }
        }
      });
    }
    return categorizedPlayers;
  }
  function sortPlayers(category) {
    const filter = filterPlayers(category);

    return filter.sort((a, b) => b.score - a.score);
  }

  function savePlayerToLocaleStorage(player) {
    const allPlayers = [];
    if (getDataFromLocalStorage()) {
      getDataFromLocalStorage().forEach((values) => allPlayers.push(values));
    }
    const playerInfo = JSON.parse(player);
    if (playerInfo.name != '') {
      allPlayers.push(JSON.parse(player));
    }
    localStorage.setItem('allPlayers', JSON.stringify(allPlayers));
  }

  function importBestPlayersToHtml() {
    const currentPlayer = JSON.parse(getCurrentPlayerData());
    let bestPlayers = [];
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
    }

    const listBestScore = document.querySelector('.resultPage__bestScores--list');

    if (bestPlayers[0]) {
      const firstBestPlayer = document.createElement('li');
      firstBestPlayer.innerHTML = `${bestPlayers[0].name} &emsp; ${bestPlayers[0].score} PTS`;
      listBestScore.appendChild(firstBestPlayer);
    }
    if (bestPlayers[1]) {
      const secondBestPlayer = document.createElement('li');
      secondBestPlayer.innerHTML = `${bestPlayers[1].name} &emsp; ${bestPlayers[1].score} PTS`;
      listBestScore.appendChild(secondBestPlayer);
    }
    if (bestPlayers[2]) {
      const thirdBestPlayer = document.createElement('li');
      thirdBestPlayer.innerHTML = `${bestPlayers[2].name} &emsp; ${bestPlayers[2].score} PTS`;
      listBestScore.appendChild(thirdBestPlayer);
    }
  }

  function importCongratulationsToHtml() {
    const currentPlayer = JSON.parse(getCurrentPlayerData());
    const correctedAnswers = currentPlayer.score / 10;

    const scoreInformations = document.querySelector('.resultPage__congrats');
    if (currentPlayer) {
      const textCongrats = document.createElement('p');
      textCongrats.className = 'resultPage__congrats--center';
      textCongrats.innerHTML = `Congratulations ${currentPlayer.name} ! <br />
      You answered ${correctedAnswers} questions!`;
      scoreInformations.appendChild(textCongrats);
    }
  }

  function importYourScoreToHtml() {
    const currentPlayer = JSON.parse(getCurrentPlayerData());

    if (currentPlayer) {
      const scoreElement = document.querySelector('.resultPage__yourScore');

      const textYourScore = document.createElement('p');
      textYourScore.innerHTML = `Your Score: ${currentPlayer.score} pts`;

      scoreElement.appendChild(textYourScore);
    }
  }

  function fillResultPageInformations() {
    savePlayerToLocaleStorage(getCurrentPlayerData());
    importBestPlayersToHtml();
    importCongratulationsToHtml();
    importYourScoreToHtml();
    saveCurrentPlayerData({
      name: '',
      score: '',
      category: '',
    });
  }

  fillResultPageInformations();
};

//chage page to homePage when reload the resultPage

window.addEventListener('load', () => {
  if (location.pathname == '/result' && sessionStorage.returnToMainPage) {
    sessionStorage.removeItem('returnToMainPage');
    window.location.href = '/';
  }

  if (location.pathname == '/result') {
    sessionStorage.setItem('returnToMainPage', true);
  } else {
    if (sessionStorage.returnToMainPage) {
      sessionStorage.removeItem('returnToMainPage');
    }
  }
});

export default createResultPage;
