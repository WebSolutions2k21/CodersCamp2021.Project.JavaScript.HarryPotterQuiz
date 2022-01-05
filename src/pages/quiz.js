/* eslint-disable no-restricted-globals */
import i18next from '../i18n';
import getDataFromApi from '../api/harryPotter';
import categoryName from '../shared/categoryNameApi';
import { showQuestionFunc } from '../shared/showQuestionFunction';
import { setStatusFunction } from '../shared/setStatusFunction';
import { resetStateFunction } from '../shared/resetStateFunction';
// eslint-disable-next-line import/no-unresolved
import img from '../../assets/images/students/*.jpeg';
import { setUniqueRandomQuestion } from '../shared/setUniqueRandomQuestion';
import { getNumberRandomArrayFunction } from '../shared/getNumberRandomAndShuffleOtherNumberFunction';
import timer from '../timer';
import { addPointsToCurrentPlayer } from '../localStorageManager';

const createQuiz = () => {
  const appScreen = document.querySelector('#root');
  const quiz = document.querySelector('#quiz');
  const { t } = i18next;

  appScreen.innerHTML = quiz.innerHTML;

  document.querySelector('[data-lang-quizstudent-header]').innerText = t('quizstudent-header');
  document.querySelector('[data-lang-quizstudent-question]').innerText = t('quizstudent-question');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');

  let shuffledQuestions;
  let currentQuestionIndex = 0;
  const LIMIT_QUESTION = 20;
  const ALL_RECORDS = 102;
  const categoryId = categoryName.API_CHARACTERS_STUDENTS;

  const chosenNumber = [];
  let arrayWithTwoDifferentIndexOfQuestion;

  let clicked = false;

  function setStatusClass(element, correct) {
    setStatusFunction(element, correct);
  }

  function resetState() {
    resetStateFunction(answerButtonsElement);
  }

  async function setNextQuestion() {
    resetState();
    const saveRandomNumber = setUniqueRandomQuestion(ALL_RECORDS, chosenNumber);
    const newRandomNumber = saveRandomNumber();
    const getNumberRandomArray = getNumberRandomArrayFunction(chosenNumber, ALL_RECORDS);
    arrayWithTwoDifferentIndexOfQuestion = getNumberRandomArray();
    const questions = getDataFromApi(
      categoryId,
      arrayWithTwoDifferentIndexOfQuestion[1],
      arrayWithTwoDifferentIndexOfQuestion[2],
    );

    shuffledQuestions = await questions(newRandomNumber);
    // eslint-disable-next-line no-use-before-define
    await showQuestion(shuffledQuestions);
  }

  const handleClick = (e) => {
    const selectedButton = e.target;

    Array.from(answerButtonsElement.children).forEach((buttonAnswer) => {
      setStatusClass(buttonAnswer, buttonAnswer.dataset.correct);
    });
    currentQuestionIndex++;
    if (selectedButton.dataset.correct) {
      addPointsToCurrentPlayer(10);
    }
    if (LIMIT_QUESTION >= currentQuestionIndex + 1) {
      // eslint-disable-next-line no-return-await
      setTimeout(async () => await setNextQuestion(), 2000);
    } else {
      location.href = '/result';
    }
  };

  function showAnswer(button) {
    button.addEventListener('click', (event) => {
      if (!clicked) {
        clicked = true;
        handleClick(event);
        setTimeout(() => {
          clicked = false;
        }, 2000);
      }
    });
  }

  async function showQuestion(question) {
    showQuestionFunc(question, questionElement, showAnswer, answerButtonsElement, img);
  }

  async function startGame() {
    currentQuestionIndex = 0;
    await setNextQuestion(shuffledQuestions);
  }

  startGame();
  timer();
};

export default createQuiz;
