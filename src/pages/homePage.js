import mapNavigationClickToTemplate from '../navigation';
import createRulesPage from './rulesPage';
import createGameModePage from './gameModePage';

const createHomePage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const homePage = document.querySelector('#homePage');

  appScreen.innerHTML = homePage.innerHTML;

  mapNavigationClickToTemplate(rootElement, '[data-action-start]', createGameModePage);
  mapNavigationClickToTemplate(rootElement, '[data-action-rules]', createRulesPage);
};

export default createHomePage;