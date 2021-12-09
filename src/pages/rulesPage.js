import mapNavigationClickToTemplate from '../navigation';
import createGameModePage from './gameModePage';
import createHomePage from './homePage';

const createRulesPage = (rootElement) => {
    const appScreen = document.querySelector(rootElement);
    const rulesTemplate = document.querySelector('#rulesPage');

    appScreen.innerHTML = rulesTemplate.innerHTML;

    mapNavigationClickToTemplate(rootElement, '[data-action-start]', createGameModePage);
    mapNavigationClickToTemplate(rootElement, '[data-action-rules]', createRulesPage);
    mapNavigationClickToTemplate(rootElement, '[data-action-exit]', createHomePage);
};

export default createRulesPage;