import mapNavigationClickToTemplate from '../navigation';
import createGameModePage from './gameModePage';
import createRankingPage from './rankingPage';
import createHomePage from './homePage';

const createResultPage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const resultPage = document.querySelector('#resultPage');

  appScreen.innerHTML = resultPage.innerHTML;

  mapNavigationClickToTemplate(rootElement, '[data-action-start]', createGameModePage);
  mapNavigationClickToTemplate(rootElement, '[data-action-scores]', createRankingPage);
  mapNavigationClickToTemplate(rootElement, '[data-action-home]', createHomePage);
};

export default createResultPage;

// // tymczasowy local Storage
localStorage.setItem('Karol', 500);
localStorage.setItem('Basia', 200);
localStorage.setItem('Celina', 250);
localStorage.setItem('Mateusz', 700);
localStorage.setItem('Iza', 550);
localStorage.setItem('Kuba', 150);
localStorage.setItem('Patryk', 100);

const players = [];

for (let [key, value] of Object.entries(localStorage)) {
  players.push([key, Number(value)]);
}

for (const [key, value] of Object.entries(players)) {
  console.log(key, value);
}
players.sort((a, b) => b[1] - a[1]);

console.log(players);
