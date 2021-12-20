import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createQuizStaffPage = (options) => {
  const appScreen = document.querySelector('#root');
  const quizStaffPage = document.querySelector('#quizStaffPage');

  appScreen.innerHTML = quizStaffPage.innerHTML;

  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createQuizStaffPage;
