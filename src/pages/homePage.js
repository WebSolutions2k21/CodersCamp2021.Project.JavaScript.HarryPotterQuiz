import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createHomePage = () => {
  const appScreen = document.querySelector('#root');
  const homePage = document.querySelector('#homePage');

  appScreen.innerHTML = homePage.innerHTML;

  mapNavigationClickToTemplate('[data-action-start]', paths.gameMode);
  mapNavigationClickToTemplate('[data-action-rules]', paths.result);
  mapNavigationClickToTemplate('[data-action-scores]', paths.ranking);
};

export default createHomePage;
