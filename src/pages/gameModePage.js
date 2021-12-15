import mapNavigationClickToTemplate from '../navigation';
import createQuizHousesPage from './quizHousesPage';
import createHomePage from './homePage';

const createGameModePage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const gameModePage = document.querySelector('#gameModePage');

  appScreen.innerHTML = gameModePage.innerHTML;

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

  // kategorie oddzielnie
  const students = document.getElementById('students');
  const staff = document.getElementById('staff');
  const houses = document.getElementById('houses');


  let player;
  const tutaj = document.querySelector('.gameMode__other')
  // get the value from placeholder
  form.addEventListener('input', (e) => {
    player = e.target.value;
    console.log(player);
  });

  const err = document.querySelector('.gameMode__textError')

  //add border color
  const tipBtn = document.querySelectorAll('.gameMode__btn');
  tipBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      if(player === undefined) {
        err.style.visibility = 'visible';
        setTimeout(function() {
          err.style.visibility = 'hidden';
      }, 2500);
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


export default createGameModePage;
