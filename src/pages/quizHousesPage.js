import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';
import getDataFromApi from '../api/harryPotter';
import categoryName from '../shared/categoryNameApi';
import { showQuestionFunction } from '../shared/showQuestionFunction';
import { setStatusFunction } from '../shared/setStatusFunction';
import { resetStateFunction } from '../shared/resetStateFunction';
import { setUniqueRandomQuestion } from '../shared/setUniqueRandomQuestion';

const createQuizHousesPage = (options) => {
  console.log('max time ', options.quizMaxTime);

  const appScreen = document.querySelector('#root');
  const quizHousesPage = document.querySelector('#quizHousesPage');
  appScreen.innerHTML = quizHousesPage.innerHTML;

  const questionElement = document.getElementById('questionHouses');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const images = document.querySelectorAll('.quizHouses__answers__img');

  let shuffledQuestions;
  let currentQuestionIndex = 0;
  const LIMIT_QUESTION = 20;
  const ALL_RECORDS = 296;
  let correctedAnswers = 0;
  const categoryId = categoryName.API_CHARACTERS_HOUSES;
  const chosenNumber = [];

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

  const questions = getDataFromApi(categoryId);
  const saveRandomNumber = setUniqueRandomQuestion(ALL_RECORDS, chosenNumber);

  function setStatusClass(element, correct) {
    setStatusFunction(element, correct);
  }

  async function showQuestion(question) {
    questionElement.innerHTML = question.question;

    const getAnswer = question.answers[0].text;

    images.forEach((answer) => {
      const getImageId = answer.getAttribute('id');

      if (getImageId === getAnswer) {
        answer.dataset.correct = true;
      }
    });
    images.forEach((img) => {
      const image = img;
      showAnswer(image);
    });
  }

  function showAnswer(image) {
    image.addEventListener('click', handleClick);
  }

  const handleClick = (e) => {
    const selectedButton = e.target;
    Array.from(answerButtonsElement.children).forEach((buttonAnswer) => {
      setStatusClass(buttonAnswer, buttonAnswer.dataset.correct);
    });
    currentQuestionIndex++;
    if (selectedButton.dataset.correct) {
      correctedAnswers++;
    }

    if (LIMIT_QUESTION >= currentQuestionIndex + 1) {
      setTimeout(async () => {
        await setNextQuestion();
      }, 2000);
    } else {
      alert(`Go to Result page, corrected answers, ${correctedAnswers}`);
    }
  };

  function resetState() {
    images.forEach((img) => {
      img.removeEventListener('click', handleClick);
      img.removeAttribute('data-correct');
      img.classList.remove('wrong');
      img.classList.remove('correct');
    });
  }

  async function setNextQuestion() {
    resetState();
    let isEmptyText;
    let shuffledQuestions = await questions(saveRandomNumber());
    isEmptyText = shuffledQuestions.answers[0].text;

    while (isEmptyText === '') {
      resetState();
      shuffledQuestions = await questions(saveRandomNumber());
      isEmptyText = shuffledQuestions.answers[0].text;
    }
    await showQuestion(shuffledQuestions);
  }

  async function startGame() {
    currentQuestionIndex = 0;
    correctedAnswers = 0;
    await setNextQuestion(shuffledQuestions);
  }

  startGame();
};

export default createQuizHousesPage;
