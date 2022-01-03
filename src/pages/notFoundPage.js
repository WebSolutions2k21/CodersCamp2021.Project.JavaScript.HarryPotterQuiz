import i18next from '../i18n';
import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createNotFoundPage = () => {
  const appScreen = document.querySelector('#root');
  const homePage = document.querySelector('#notFound');
  const { t, changeLanguage } = i18next;
  appScreen.innerHTML = homePage.innerHTML;

  document.querySelector('[data-lang-notFound-text1]').innerText = t('notFound-text1');
  document.querySelector('[data-lang-notFound-text2]').innerText = t('notFound-text2');
  document.querySelector('[data-action-back]').innerText = t('back');
  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createNotFoundPage;
