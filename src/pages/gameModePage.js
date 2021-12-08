const createGameModePage = (rootElement) => {
    const appScreen = document.querySelector(rootElement);
    const gameModePage = document.querySelector('#gameModePage');

    appScreen.innerHTML = gameModePage.innerHTML;
};

export default createGameModePage;