import createHomePage from './pages/homePage';
import createGameModePage from './pages/gameModePage';
import createResultPage from './pages/resultPage';
import createQuizHousesPage from './pages/quizHousesPage';
// import createQuizStudentsPage from './pages/quizStudentsPage';
import createQuizStaffPage from './pages/quizStaffPage';
import createNotFoundPage from './pages/notFoundPage';
import createRulesPage from './pages/rulesPage';
import createRankingPage from './pages/rankingPage';
import createQuiz from './pages/quiz';
import { paths } from './shared/router';

const App = ({ options }) => {
  const path = window.location.pathname;
  const routes = {
    '/': () => createHomePage(),
    '/game-mode': () => createGameModePage(),
    '/houses': () => createQuizHousesPage(options),
    '/students': () => createQuiz(),
    '/staff': () => createQuizStaffPage(options),
    '/result': () => createResultPage(),
    '/ranking': () => createRankingPage(),
    '/rules': () => createRulesPage(),
    '/404': () => createNotFoundPage(),
  };
  // handle back button in browser
  window.addEventListener('popstate', () => window.location.reload());
  console.log(path);
  if (path in routes) routes[path]();
  else {
    window.history.pushState({}, '', paths.notFound);
    window.location.reload();
  }
};

export default App;
