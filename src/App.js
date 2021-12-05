import createHomePage from './pages/homePage';

const App = ({ rootElement, options }) => {
  createHomePage(rootElement);

  console.log(options.apiUrl);
};

export default App;
