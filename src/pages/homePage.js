const createHomePage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const homeTemplate = document.querySelector('#homePage');

  appScreen.innerHTML = homeTemplate.innerHTML;
};

export default createHomePage;
