import i18next from '../i18n';
import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createRulesPage = () => {
  const appScreen = document.querySelector('#root');
  const rulesTemplate = document.querySelector('#rulesPage');
  const { t, changeLanguage } = i18next;

  appScreen.innerHTML = rulesTemplate.innerHTML;

  document.querySelector('[data-action-back]').innerText = t('back');
  document.querySelector('[data-lang-rulesPage-h1]').innerText = t('rules');
  document.querySelector('[data-lang-rulesPage-p1]').innerText = t('p1');
  document.querySelector('[data-lang-rulesPage-p2]').innerHTML = `<strong>10</strong> ${t('p2')}`;
  document.querySelector('[data-lang-rulesPage-p3]').innerHTML = `<strong>0</strong> ${t('p3')}`;
  document.querySelector('[data-lang-rulesPage-p4]').innerText = t('p4');
  document.querySelector('[data-lang-rulesPage-p5]').innerText = t('p5');
  mapNavigationClickToTemplate('[data-action-back]', paths.home);
};

export default createRulesPage;
