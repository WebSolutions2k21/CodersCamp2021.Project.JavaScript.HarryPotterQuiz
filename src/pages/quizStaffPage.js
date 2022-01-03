import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';
import categoryName from '../shared/categoryNameApi';
import getDataFromApi from '../api/harryPotter';
import { showQuestionFunction } from '../shared/showQuestionFunction';
import { setStatusFunction } from '../shared/setStatusFunction';
import { resetStateFunction } from '../shared/resetStateFunction';
import img from '../../assets/images/staff/*.jpeg';
import { setUniqueRandomQuestion } from '../shared/setUniqueRandomQuestion';
import { getNumberRandomAndShuffleOtherNumberFunction } from '../shared/getNumberRandomAndShuffleOtherNumberFunction';
import timer from '../timer';
import { addPointsToCurrentPlayer } from '../localStorageManager';

const createQuizStaffPage = (options) => {
  const appScreen = document.querySelector('#root');
  const quizStaffPage = document.querySelector('#quizStaffPage');

  appScreen.innerHTML = quizStaffPage.innerHTML;

  const questionElement = document.getElementById('question-staff');
  const answerButtonsElement = document.getElementById('answer-buttons-staff');

  let shuffledQuestions;
  let currentQuestionIndex = 0;
  const LIMIT_QUESTION = 20;
  const ALL_RECORDS = 24; 
  let correctedAnswers = 0;
  const categoryId = categoryName.API_CHARACTERS_STAFF;

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
    console.log('button', button);
    button.addEventListener('click', (e) => {
      const selectedButton = e.target;

      Array.from(answerButtonsElement.children).forEach((buttonAnswer) => {
        setStatusClass(buttonAnswer, buttonAnswer.dataset.correct);
      });
      currentQuestionIndex++;

      if (selectedButton.dataset.correct) {
        correctedAnswers++;
      }
      if (LIMIT_QUESTION >= currentQuestionIndex + 1) {
        setTimeout(async () => setNextQuestion(), 2000);
      } else {
        // alert(`Go to Result page, corrected answers, ${correctedAnswers}`);
        addPointsToCurrentPlayer(correctedAnswers);
        location.href = '/result';
      }
    });
  }

  function resetState() {
    resetStateFunction(answerButtonsElement);
  }

  async function setNextQuestion() {
    resetState();
    getNumberRandomAndShuffleOtherNumber();
    shuffledQuestions = await questions(saveRandomNumber());
    await showQuestion(shuffledQuestions);
  }

  async function startGame() {
    currentQuestionIndex = 0;
    correctedAnswers = 0;
    await setNextQuestion(shuffledQuestions);
  }

  startGame();

  timer();
};

export default createQuizStaffPage;
