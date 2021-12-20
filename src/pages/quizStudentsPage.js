import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createQuizStudentsPage = (options) => {
  const appScreen = document.querySelector('#root');
  const quizStudentsPage = document.querySelector('#quizStudentsPage');

  appScreen.innerHTML = quizStudentsPage.innerHTML;

  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createQuizStudentsPage;
