import mapNavigationClickToTemplate from '../navigation';
import createQuizHousesPage from './quizHousesPage';
import createQuizStudentsPage from './quizStudentsPage';
import createHomePage from './homePage';

const createGameModePage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const gameModePage = document.querySelector('#gameModePage');

  appScreen.innerHTML = gameModePage.innerHTML;

  addEventListenersForGameModeButtons();

  mapNavigationClickToTemplate(rootElement, '[data-action-houses]', createQuizHousesPage);
  mapNavigationClickToTemplate(rootElement, '[data-action-exit]', createHomePage);


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
  const err = document.querySelector('.gameMode__textError')
  const tipBtn = document.querySelectorAll('.gameMode__btn');
  tipBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      if(player === undefined) {
        err.style.visibility = 'visible';
        setTimeout(function() {
          err.style.visibility = 'hidden';
      }, 3000);
      } else if (player.length >= 1) {
        mapNavigationClickToTemplate(rootElement, '[data-action-houses]', createQuizHousesPage);
        mapNavigationClickToTemplate(rootElement, '[data-action-students]', createQuizStudentsPage);
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

  document.querySelectorAll('[data-action-button]').forEach(element => {
    element.addEventListener('click', savePlayerName);
  });

  // var buttons = document.querySelectorAll('[data-action-button]');
  // for (var i = 0; i < buttons.length; i++) {
  //   buttons[i].addEventListener('click', savePlayerName);
  // }
};

function savePlayerName() {
  const login = document.querySelector('#fname').value;
  localStorage.setItem("namePlayer", login);
}

export default createGameModePage;
