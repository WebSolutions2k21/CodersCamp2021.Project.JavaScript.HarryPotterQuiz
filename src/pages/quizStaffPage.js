import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';
import categoryName from '../shared/categoryNameApi';
import getDataFromApi from '../api/harryPotter';
import randomNumberOfIndex from '../shared/randomIndexGenerator';
import { showQuestionFunction } from '../shared/showQuestionFunction';
import { setStatusFunction } from '../shared/setStatusFunction';
import { resetStateFunction } from '../shared/resetStateFunction';
import img from '../../assets/images/staff/*.jpeg';

const createQuizStaffPage = (options) => {
  const appScreen = document.querySelector('#root');
  const quizStaffPage = document.querySelector('#quizStaffPage');

  appScreen.innerHTML = quizStaffPage.innerHTML;

  mapNavigationClickToTemplate('[data-action-home]', paths.home);
  
  const questionContainerElement = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');

  let shuffledQuestions;
  let currentQuestionIndex = 0;
  const LIMIT_QUESTION = 7;
  const ALL_RECORDS = 23; //pobrać tyle rekordów ile jest w api z tej kategorii
  let correctedAnswers = 0;
  const categoryId = categoryName.API_CHARACTERS_STAFF;
  //tymczasowe dorobić róźne
  let temp_Rec1 = Math.floor(Math.random() * 23 + 1);
  let temp_Rec2 = Math.floor(Math.random() * 23+ 1);


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
    shuffledQuestions = await await questions(randomNumberOfIndex(ALL_RECORDS));
    await showQuestion(shuffledQuestions);
  }

  async function startGame() {
    shuffledQuestions = await questions(randomNumberOfIndex(ALL_RECORDS));
    currentQuestionIndex = 0;
    correctedAnswers = 0;
    questionContainerElement.classList.remove('hide');
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

      if(seconds == '01') {
        window.location = '/result';
      }
  }

  setInterval(updateCountDown, 1000);

};

export default createQuizStaffPage;
