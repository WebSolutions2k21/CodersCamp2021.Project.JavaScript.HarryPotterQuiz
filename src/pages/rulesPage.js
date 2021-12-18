import mapNavigationClickToTemplate from '../navigation';
import createGameModePage from './gameModePage';
import createHomePage from './homePage';
import createRankingPage from './rankingPage';

const createRulesPage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const rulesTemplate = document.querySelector('#rulesPage');

  appScreen.innerHTML = rulesTemplate.innerHTML;

  
  mapNavigationClickToTemplate(rootElement, '[data-action-back]', createHomePage);
  
};

export default createRulesPage;
