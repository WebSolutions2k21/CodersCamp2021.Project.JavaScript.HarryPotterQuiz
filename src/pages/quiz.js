import i18next from '../i18n';
import getDataFromApi from '../api/harryPotter';
import categoryName from '../shared/categoryNameApi';
import { showQuestionFunction } from '../shared/showQuestionFunction';
import { setStatusFunction } from '../shared/setStatusFunction';
import { resetStateFunction } from '../shared/resetStateFunction';
import img from '../../assets/images/students/*.jpeg';
import { setUniqueRandomQuestion } from '../shared/setUniqueRandomQuestion';
import { getNumberRandomAndShuffleOtherNumberFunction } from '../shared/getNumberRandomAndShuffleOtherNumberFunction';

const createQuiz = () => {
  const appScreen = document.querySelector('#root');
  const quiz = document.querySelector('#quiz');
  const { t, changeLanguage } = i18next;

  appScreen.innerHTML = quiz.innerHTML;

  document.querySelector('[data-lang-quizStudent-header]').innerText = t('quizStudent-header');
  document.querySelector('[data-lang-quizStudent-question]').innerText = t('quizStudent-question');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');

  let shuffledQuestions;
  let currentQuestionIndex = 0;
  const LIMIT_QUESTION = 20;
  const ALL_RECORDS = 102;
  let correctedAnswers = 0;
  const categoryId = categoryName.API_CHARACTERS_STUDENTS;

  const chosenNumber = [];
  let arrayWithTwoDifferentIndexOfQuestion;

  const saveRandomNumber = setUniqueRandomQuestion(ALL_RECORDS, chosenNumber);

  const getNumberRandomAndShuffleOtherNumber = getNumberRandomAndShuffleOtherNumberFunction(chosenNumber, ALL_RECORDS);

  arrayWithTwoDifferentIndexOfQuestion = getNumberRandomAndShuffleOtherNumber();

  const questions = getDataFromApi(
    categoryId,
    arrayWithTwoDifferentIndexOfQuestion[1],
    arrayWithTwoDifferentIndexOfQuestion[2],
  );

  function setStatusClass(element, correct) {
    setStatusFunction(element, correct);
  }

  async function showQuestion(question) {
    showQuestionFunction(question, questionElement, showAnswer, answerButtonsElement, img);
  }

  function showAnswer(button) {
    button.addEventListener('click', (e) => {
      const selectedButton = e.target;

      Array.from(answerButtonsElement.children).forEach((buttonAnswer) => {
        setStatusClass(buttonAnswer, buttonAnswer.dataset.correct);
      });
      currentQuestionIndex++;
      console.log(currentQuestionIndex);
      if (selectedButton.dataset.correct) {
        correctedAnswers++;
      }
      if (LIMIT_QUESTION >= currentQuestionIndex + 1) {
        setTimeout(async () => setNextQuestion(), 2000);
      } else {
        alert(`Go to Result page, corrected answers, ${correctedAnswers}`);
      }
    });
  }

  function resetState() {
    resetStateFunction(answerButtonsElement);
  }

  async function setNextQuestion() {
    resetState();
    shuffledQuestions = await questions(saveRandomNumber());
    arrayWithTwoDifferentIndexOfQuestion = getNumberRandomAndShuffleOtherNumber();
    console.log('wylosowane liczby', arrayWithTwoDifferentIndexOfQuestion);
    await showQuestion(shuffledQuestions);
  }

  async function startGame() {
    currentQuestionIndex = 0;
    correctedAnswers = 0;
    await setNextQuestion(shuffledQuestions);
  }

  startGame();

  // timer
  const startingMinutes = 1;
  let time = startingMinutes * 60;

  const countDownEl = document.getElementById('timer_clock');

  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `0${minutes}:${seconds}`;
    time--;

    if (seconds == '01') {
      window.location = '/result';
    }
  }

  setInterval(updateCountDown, 1000);
};

export default createQuiz;
