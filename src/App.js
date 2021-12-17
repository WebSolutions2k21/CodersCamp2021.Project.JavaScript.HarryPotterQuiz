import createHomePage from './pages/homePage';
import createGameModePage from './pages/gameModePage';
import createResultPage from './pages/resultPage';
import createQuizHousesPage from './pages/quizHousesPage';
import createNotFoundPage from './pages/notFoundPage';

const App = ({ options }) => {
  const path = window.location.pathname;
  const routes = {
    '/': () => createHomePage(),
    '/game-mode': () => createGameModePage(),
    '/quiz/houses': () => createQuizHousesPage(options),
    '/result': () => createResultPage(),
    '/404': () => createNotFoundPage(),
  };
  // handle back button in browser
  window.addEventListener('popstate', () => window.location.reload());

  if (path in routes) routes[path]();
  else {
    window.history.pushState({}, '', '/404');
    window.location.reload();
  }
};

export default App;
