import i18next from '../i18n';
import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createRankingPage = () => {
  const appScreen = document.querySelector('#root');
  const rankingTemplate = document.querySelector('#rankingPage');
  const { t, changeLanguage } = i18next;

  appScreen.innerHTML = rankingTemplate.innerHTML;

  document.querySelector('[data-lang-rankingPage-header]').innerText = t('rankingPage-header');
  document.querySelector('[data-action-students]').innerText = t('students');
  document.querySelector('[data-action-staff]').innerText = t('staff');
  document.querySelector('[data-action-houses]').innerText = t('houses');
  document.querySelector('[data-action-back]').innerText = t('back');
  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createRankingPage;
