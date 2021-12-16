import mapNavigationClickToTemplate from '../navigation';

import createHomePage from './homePage';

const createQuizStudentsPage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const quizStudentsPage = document.querySelector('#quizStudentsPage');

  appScreen.innerHTML = quizStudentsPage.innerHTML;

  mapNavigationClickToTemplate(rootElement, '[data-action-home]', createHomePage);
};

export default createQuizStudentsPage;
