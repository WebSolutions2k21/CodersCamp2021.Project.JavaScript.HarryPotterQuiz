import mapNavigationClickToTemplate from '../navigation';

import createHomePage from './homePage';

const createQuizHousesPage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const quizHousesPage = document.querySelector('#quizHousesPage');

  appScreen.innerHTML = quizHousesPage.innerHTML;

  mapNavigationClickToTemplate(rootElement, '[data-action-home]', createHomePage);
};

export default createQuizHousesPage;
