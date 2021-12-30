import i18next from '../i18n';
import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createHomePage = () => {
  const appScreen = document.querySelector('#root');
  const homePage = document.querySelector('#homePage');
  const { t, changeLanguage } = i18next;

  appScreen.innerHTML = homePage.innerHTML;

  document.querySelector('[data-action-start]').innerText = t('start');
  document.querySelector('[data-action-rules]').innerText = t('rules');
  document.querySelector('[data-action-scores]').innerText = t('best_scores');
  const container = document.querySelector('.wrapperHomePage ');
  const fragment = document.createElement('div');
  fragment.innerHTML = `
  <button id="en" class="btn" style="padding: 1rem">en</button>
  <button id="pl" class="btn" style="padding: 1rem">pl</button>
  `;
  container.appendChild(fragment);
  document.getElementById('en').addEventListener('click', () => {
    changeLanguage('en');
    window.location.reload();
  });

  document.getElementById('pl').addEventListener('click', () => {
    changeLanguage('pl');
    window.location.reload();
  });

  mapNavigationClickToTemplate('[data-action-start]', paths.gameMode);
  mapNavigationClickToTemplate('[data-action-rules]', paths.rules);
  mapNavigationClickToTemplate('[data-action-scores]', paths.ranking);
  // mapNavigationClickToTemplate('[data-action-resultPage]', paths.ResultPage);
};

export default createHomePage;
