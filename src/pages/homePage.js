const createHomePage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const homeTemplate = document.querySelector('#homePage');

  // appScreen.innerHTML = homeTemplate.innerHTML;

  const btnStart = document.querySelector('#btnStart');
  btnStart.addEventListener("click", () => {

    const gameModeTemplate = document.querySelector('#gameModePage');
    appScreen.innerHTML = gameModeTemplate.innerHTML;
  });
};

export default createHomePage;