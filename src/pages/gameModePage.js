import mapNavigationClickToTemplate from '../navigation';
import createQuizHousesPage from './quizHousesPage';
import createQuizStudentsPage from './quizStudentsPage';
import createQuizStaffPage from './quizStaffPage';
import createHomePage from './homePage';
import { saveCurrentPlayerData, addPointsToCurrentPlayer } from '../localStorageManager';

const createGameModePage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const gameModePage = document.querySelector('#gameModePage');

  appScreen.innerHTML = gameModePage.innerHTML;

<<<<<<< HEAD

  mapNavigationClickToTemplate(rootElement, '[data-action-exit]', createHomePage);
=======
  addEventListenersForGameModeButtons();
>>>>>>> 864aef91f9f6031a8c74caa48e951acc1f720355

  mapNavigationClickToTemplate(rootElement, '[data-action-back]', createHomePage);

  // change placeholder
  const form = document.querySelector('form');
  form.addEventListener(
    'focus',
    function (event) {
      event.target.style.background = 'rgba(211, 166, 37, 1)';
    },
    true,
  );
  form.addEventListener(
    'blur',
    function (event) {
      event.target.style.background = '';
    },
    true,
  );

  // get the value from placeholder
  let player;
  form.addEventListener('input', (e) => {
    player = e.target.value;
    console.log(player);
  });

  //border color, text error, choose the category
  const err = document.querySelector('.gameMode__textError');
  const tipBtn = document.querySelectorAll('.gameMode__btn');
  tipBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      if (player === undefined) {
        err.style.visibility = 'visible';
        setTimeout(function () {
          err.style.visibility = 'hidden';
        }, 3000);
      } else if (player.length >= 1) {
        mapNavigationClickToTemplate(rootElement, '[data-action-houses]', createQuizHousesPage);
        mapNavigationClickToTemplate(rootElement, '[data-action-students]', createQuizStudentsPage);
        mapNavigationClickToTemplate(rootElement, '[data-action-staff]', createQuizStaffPage);
      }
      tipBtn.forEach((btn) => {
        btn.classList.remove('bor');

        if (event.target.innerHTML == btn.innerHTML) {
          btn.classList.add('bor');
        }
      });
    });
  });
};

function addEventListenersForGameModeButtons() {
  document.querySelectorAll('[data-game-mode-selection-button]').forEach((element) => {
    element.addEventListener('click', () => {
      saveCurrentPlayerData({
        name: document.querySelector('#fname').value,
        score: 0,
        category: element.getAttribute('data-category-name'),
      });
      /// Przykład uaktualnienia localStorage o 100pkt dla Gryffindoru :) (a raczej dla aktualnego gracza)
      // addPointsToCurrentPlayer(100);
    });
  });
}

export default createGameModePage;
