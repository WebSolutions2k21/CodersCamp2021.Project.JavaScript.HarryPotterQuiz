import { route } from './shared/router';

function mapNavigationClickToTemplate(btnSelector, path) {
  const btn = document.querySelector(btnSelector);

  if (btn === null) {
    console.error('Nie znaleziono przycisk szukając po selektorze: ' + btnSelector);
  }

  btn.addEventListener('click', () => {
    route(path);
  });
}

export default mapNavigationClickToTemplate;
