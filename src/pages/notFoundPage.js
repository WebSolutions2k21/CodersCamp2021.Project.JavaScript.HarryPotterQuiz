import i18next from '../i18n';
import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createNotFoundPage = () => {
  const appScreen = document.querySelector('#root');
  const homePage = document.querySelector('#notFound');
  const { t, changeLanguage } = i18next;
  appScreen.innerHTML = homePage.innerHTML;

  document.querySelector('[data-lang-notfound-text1]').innerText = t('notfound-text1');
  document.querySelector('[data-lang-notfound-text2]').innerText = t('notfound-text2');
  document.querySelector('[data-action-back]').innerText = t('back');
  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createNotFoundPage;
