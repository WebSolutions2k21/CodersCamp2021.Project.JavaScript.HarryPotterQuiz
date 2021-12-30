import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createRankingPage = () => {
  const appScreen = document.querySelector('#root');
  const rankingTemplate = document.querySelector('#rankingPage');

  appScreen.innerHTML = rankingTemplate.innerHTML;

  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createRankingPage;
