import mapNavigationClickToTemplate from '../navigation';
import createRulesPage from './rulesPage';
import createGameModePage from './gameModePage';
import createRankingPage from './rankingPage';
import createResultPage from './resultPage';

const createHomePage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const homePage = document.querySelector('#homePage');

  appScreen.innerHTML = homePage.innerHTML;

  mapNavigationClickToTemplate(rootElement, '[data-action-start]', createGameModePage);
  mapNavigationClickToTemplate(rootElement, '[data-action-rules]', createRulesPage);
  mapNavigationClickToTemplate(rootElement, '[data-action-scores]', createRankingPage);
  mapNavigationClickToTemplate(rootElement, '[data-action-resultPage]', createResultPage);
};

export default createHomePage;
