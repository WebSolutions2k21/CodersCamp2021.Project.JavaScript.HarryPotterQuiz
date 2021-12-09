import mapNavigationClickToTemplate from '../navigation';
import createHomePage from './homePage';

const createRankingPage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const rankingTemplate = document.querySelector('#rankingPage');

  appScreen.innerHTML = rankingTemplate.innerHTML;

  mapNavigationClickToTemplate(rootElement, '[data-action-home]', createHomePage);
};

export default createRankingPage;
