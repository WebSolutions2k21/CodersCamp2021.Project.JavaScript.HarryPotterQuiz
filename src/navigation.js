function mapNavigationClickToTemplate(rootElement, btnSelector, switchFuntion) {
  const btn = document.querySelector(btnSelector);

  if (btn === null) {
    console.error('Nie znaleziono przycisk szukając po selektorze: ' + btnSelector);
  }

  btn.addEventListener('click', () => {
    switchFuntion(rootElement);
  });
}

export default mapNavigationClickToTemplate;
