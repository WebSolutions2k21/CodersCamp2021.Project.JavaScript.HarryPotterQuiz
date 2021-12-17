import { route } from './shared/router';

function mapNavigationClickToTemplate(btnSelector, path) {
  const btn = document.querySelector(btnSelector);

  btn.addEventListener('click', () => {
    route(path);
  });
}

export default mapNavigationClickToTemplate;
