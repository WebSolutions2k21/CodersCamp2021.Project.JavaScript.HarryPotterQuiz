import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createResultPage = () => {
  const appScreen = document.querySelector('#root');
  const resultPage = document.querySelector('#resultPage');

  appScreen.innerHTML = resultPage.innerHTML;

  mapNavigationClickToTemplate('[data-action-start]', paths.gameMode);
  mapNavigationClickToTemplate('[data-action-scores]', paths.ranking);
  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createResultPage;
