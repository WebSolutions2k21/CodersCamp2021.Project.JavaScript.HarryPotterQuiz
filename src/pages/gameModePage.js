import mapNavigationClickToTemplate from '../navigation';
import createQuizHousesPage from './quizHousesPage';

const createGameModePage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const gameModePage = document.querySelector('#gameModePage');

  appScreen.innerHTML = gameModePage.innerHTML;

  mapNavigationClickToTemplate(rootElement, '[data-action-houses]', createQuizHousesPage);
};

export default createGameModePage;
