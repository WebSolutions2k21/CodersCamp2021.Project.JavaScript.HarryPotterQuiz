import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createRulesPage = () => {
  const appScreen = document.querySelector('#root');
  const rulesTemplate = document.querySelector('#rulesPage');

  appScreen.innerHTML = rulesTemplate.innerHTML;

  mapNavigationClickToTemplate('[data-action-back]', paths.home);
};

export default createRulesPage;
