import i18next from '../i18n';
import mapNavigationClickToTemplate from '../navigation';
import { paths, route } from '../shared/router';
import { saveCurrentPlayerData } from '../localStorageManager';

function addEventListenersForGameModeButtons() {
  document.querySelectorAll('[data-game-mode-selection-button]').forEach((element) => {
    element.addEventListener('click', () => {
      saveCurrentPlayerData({
        name: document.querySelector('#fname').value,
        score: 0,
        category: element.getAttribute('data-category-name'),
      });
      // eslint-disable-next-line max-len
      /// Przykład uaktualnienia localStorage o 100pkt dla Gryffindoru :) (a raczej dla aktualnego gracza)
      // addPointsToCurrentPlayer(100);
    });
  });
}

const createGameModePage = () => {
  const appScreen = document.querySelector('#root');
  const gameModePage = document.querySelector('#gameModePage');
  const { t, changeLanguage } = i18next;
  appScreen.innerHTML = gameModePage.innerHTML;

  addEventListenersForGameModeButtons();

  document.querySelector('[data-lang-gameMode-header]').innerText = t('gameMode-header');
  document.getElementById('fname').placeholder = t('fname');
  document.querySelector('[data-lang-gameMode-input-forgotten]').innerText = t('gameMode-input-forgotten');
  document.querySelector('[data-action-students]').innerText = t('students');
  document.querySelector('[data-action-staff]').innerText = t('staff');
  document.querySelector('[data-action-houses]').innerText = t('houses');
  document.querySelector('[data-action-back]').innerText = t('back');
  mapNavigationClickToTemplate('[data-action-back]', paths.home);
  // change placeholder
  const form = document.querySelector('form');

  form.addEventListener(
    'focus',
    (event) => {
      event.target.style.background = 'rgba(211, 166, 37, 1)';
    },
    true,
  );
  form.addEventListener(
    'blur',
    (event) => {
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

  // border color, text error, choose the category
  const pages = [paths.quizStudents, paths.quizStaff, paths.quizHouses];
  const err = document.querySelector('.gameMode__textError');
  const tipBtn = document.querySelectorAll('.gameMode__btn');
  tipBtn.forEach((btn, i) => {
    btn.addEventListener('click', (event) => {
      if (player === undefined) {
        err.style.visibility = 'visible';
        setTimeout(() => {
          err.style.visibility = 'hidden';
        }, 3000);
      } else if (player.length >= 1) {
        route(pages[i]);
      }
      tipBtn.forEach((btn2) => {
        btn2.classList.remove('bor');

        if (event.target.innerHTML === btn2.innerHTML) {
          btn2.classList.add('bor');
        }
      });
    });
  });
};
export default createGameModePage;
