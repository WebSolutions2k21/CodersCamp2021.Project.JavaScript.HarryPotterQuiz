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
localStorage.setItem('Test1', 500);
localStorage.setItem('Test2', 200);
localStorage.setItem('Test3', 250);
localStorage.setItem('Test4', 700);
localStorage.setItem('Test5', 550);
localStorage.setItem('Test6', 150);
localStorage.setItem('Test7', 100);

const players = [];

for (let [key, value] of Object.entries(localStorage)) {
  players.push([key, Number(value)]);
}

// for (const [key, value] of Object.entries(players)) {
//   console.log(key, value);
// }

players.sort((a, b) => b[1] - a[1]);

console.log(players);
