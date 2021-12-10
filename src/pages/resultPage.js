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
