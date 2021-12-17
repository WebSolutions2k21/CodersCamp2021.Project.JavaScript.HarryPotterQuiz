export const paths = {
  home: '/',
  gameMode: '/game-mode',
  quizHouses: '/quiz/houses',
  quizStudents: '/quiz/students',
  ranking: '/ranking',
  result: '/result',
  rules: '/rules',
  notFound: '/404',
};

export const route = (path) => {
  window.history.pushState({}, '', path);
  window.location.reload();
};
