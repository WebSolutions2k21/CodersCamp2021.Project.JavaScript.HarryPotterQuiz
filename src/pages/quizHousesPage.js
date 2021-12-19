import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createQuizHousesPage = (options) => {
  const appScreen = document.querySelector('#root');
  const quizHousesPage = document.querySelector('#quizHousesPage');

  appScreen.innerHTML = quizHousesPage.innerHTML;

  console.log('max time ', options.quizMaxTime);

  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createQuizHousesPage;
