import mapNavigationClickToTemplate from '../navigation';
import createGameModePage from './gameModePage';
import createRankingPage from './rankingPage';
import createHomePage from './homePage';

const createQuizHousesPage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const quizHousesPage = document.querySelector('#quizHousesPage');

  appScreen.innerHTML = quizHousesPage.innerHTML;

  mapNavigationClickToTemplate(rootElement, '[data-action-start]', createGameModePage);
  mapNavigationClickToTemplate(rootElement, '[data-action-scores]', createRankingPage);
  mapNavigationClickToTemplate(rootElement, '[data-action-home]', createHomePage);
};

export default createQuizHousesPage;
