const createQuiz = () => {
  const appScreen = document.querySelector('#root');
  const quiz = document.querySelector('#quiz');

  appScreen.innerHTML = quiz.innerHTML;
};

export default createQuiz;
