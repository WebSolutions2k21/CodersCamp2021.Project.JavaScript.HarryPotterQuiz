import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createNotFoundPage = () => {
  const appScreen = document.querySelector('#root');
  const homePage = document.querySelector('#notFound');
  appScreen.innerHTML = homePage.innerHTML;

  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createNotFoundPage;
