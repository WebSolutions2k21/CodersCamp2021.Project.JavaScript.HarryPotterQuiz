import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

function savePlayerName() {
  const login = document.querySelector('#fname').value;
  localStorage.setItem('namePlayer', login);
}

function addEventListenersForGameModeButtons() {
  document.querySelectorAll('[data-action-button]').forEach((element) => {
    element.addEventListener('click', savePlayerName);
  });

  // var buttons = document.querySelectorAll('[data-action-button]');
  // for (var i = 0; i < buttons.length; i++) {
  //   buttons[i].addEventListener('click', savePlayerName);
  // }
}

const createGameModePage = () => {
  const appScreen = document.querySelector('#root');
  const gameModePage = document.querySelector('#gameModePage');

  appScreen.innerHTML = gameModePage.innerHTML;

  addEventListenersForGameModeButtons();

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
  const err = document.querySelector('.gameMode__textError');
  const tipBtn = document.querySelectorAll('.gameMode__btn');
  tipBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      if (player === undefined) {
        err.style.visibility = 'visible';
        setTimeout(() => {
          err.style.visibility = 'hidden';
        }, 3000);
      } else if (player.length >= 1) {
        mapNavigationClickToTemplate('[data-action-houses]', paths.quizHouses);
        mapNavigationClickToTemplate('[data-action-students]', paths.quizStudents);
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
