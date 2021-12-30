import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';
import categoryName from '../shared/categoryNameApi';
import getDataFromApi from '../api/harryPotter';
import { showQuestionFunction } from '../shared/showQuestionFunction';
import { setStatusFunction } from '../shared/setStatusFunction';
import { resetStateFunction } from '../shared/resetStateFunction';
import img from '../../assets/images/staff/*.jpeg';
import { setUniqueRandomQuestion } from '../shared/setUniqueRandomQuestion';

const createQuizStaffPage = (options) => {
  const appScreen = document.querySelector('#root');
  const quizStaffPage = document.querySelector('#quizStaffPage');

  appScreen.innerHTML = quizStaffPage.innerHTML;

  const questionContainerElement = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');

  let shuffledQuestions;
  let currentQuestionIndex = 0;
  const LIMIT_QUESTION = 20;
  const ALL_RECORDS = 24; //pobrać tyle rekordów ile jest w api z tej kategorii
  let correctedAnswers = 0;
  const categoryId = categoryName.API_CHARACTERS_STAFF;
  //tymczasowe dorobić róźne
  let temp_Rec1 = Math.floor(Math.random() * 23 + 1);
  let temp_Rec2 = Math.floor(Math.random() * 23 + 1);

  const chosenNumber = [];

  const saveRandomNumber = setUniqueRandomQuestion(ALL_RECORDS, chosenNumber);

  const questions = getDataFromApi(categoryId, temp_Rec1, temp_Rec2);

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
    shuffledQuestions = await await questions(saveRandomNumber());
    await showQuestion(shuffledQuestions);
  }

  async function startGame() {
    shuffledQuestions = await questions(saveRandomNumber());
    currentQuestionIndex = 0;
    correctedAnswers = 0;
    questionContainerElement.classList.remove('hide');
    await setNextQuestion(shuffledQuestions);
  }

  startGame();
};

export default createQuizStaffPage;
