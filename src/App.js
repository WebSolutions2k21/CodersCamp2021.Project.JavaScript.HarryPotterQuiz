import createHomePage from './pages/homePage';
import createGameModePage from './pages/gameModePage';
import createResultPage from './pages/resultPage';
import createQuizHousesPage from './pages/quizHousesPage';

const App = ({ options }) => {
  const path = window.location.pathname;
  const routes = {
    '/': () => createHomePage(),
    '/game-mode': () => createGameModePage(),
    '/quiz/houses': () => createQuizHousesPage(options),
    '/result': () => createResultPage(),
  };
  // handle back button in browser
  window.addEventListener('popstate', () => window.location.reload());

  routes[path]();
};

export default App;
