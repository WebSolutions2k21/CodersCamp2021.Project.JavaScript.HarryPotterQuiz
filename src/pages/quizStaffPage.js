import mapNavigationClickToTemplate from '../navigation';

import createHomePage from './homePage';

const createQuizStaffPage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const quizStaffPage = document.querySelector('#quizStaffPage');

  appScreen.innerHTML = quizStaffPage.innerHTML;

  mapNavigationClickToTemplate(rootElement, '[data-action-home]', createHomePage);
};

export default createQuizStaffPage;
