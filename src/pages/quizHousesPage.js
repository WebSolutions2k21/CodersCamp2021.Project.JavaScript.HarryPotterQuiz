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
  const LIMIT_QUESTION = 7;
  const ALL_RECORDS = 100; //pobrać tyle rekordów ile jest w api z tej kategorii
  let correctedAnswers = 0;
  const categoryId = categoryName.API_CHARACTERS_HOUSES;
  const chosenNumber = [];

  // timer
  // const startingMinutes = 10;
  // let time = startingMinutes * 60;

  // const countDownEl = document.getElementById('timer_clock');

  // function updateCountDown() {
  //   const minutes = Math.floor(time / 60);
  //   let seconds = time % 60;

  //   seconds = seconds < 10 ? '0' + seconds : seconds;

  //   countDownEl.innerHTML = `0${minutes}:${seconds}`;
  //   time--;

  //   if (seconds == '01') {
  //     window.location = '/result';
  //   }
  // }

  // setInterval(updateCountDown, 1000);

  const questions = getDataFromApi(categoryId);
  const saveRandomNumber = setUniqueRandomQuestion(ALL_RECORDS, chosenNumber);

  function setStatusClass(element, correct) {
    setStatusFunction(element, correct);
  }

  async function showQuestion(question) {
    questionElement.innerHTML = question.question;

    const getAnswer = question.answers[0].text;
    if (getAnswer === '') {
    }
    console.log('get answer', getAnswer);
    // console.log(image);
    images.forEach((answer) => {
      console.log('answer', answer);
      const getImageId = answer.getAttribute('id');

      if (getImageId === getAnswer) {
        console.log('poprawna');
        answer.dataset.correct = true;
      }
      // console.log('correct ustawienie', answer.dataset);
    });
    images.forEach((img) => {
      const image = img;
      showAnswer(image);
    });
  }

  function showAnswer(image) {
    image.addEventListener('click', (e) => {
      const selectedButton = e.target;
      console.log('selected button', selectedButton);
      Array.from(answerButtonsElement.children).forEach((buttonAnswer) => {
        setStatusClass(buttonAnswer, buttonAnswer.dataset.correct);
      });
      currentQuestionIndex++;
      console.log('index obecny', currentQuestionIndex);
      if (selectedButton.dataset.correct) {
        correctedAnswers++;
        console.log('udzielona poprawna odpowiedz', correctedAnswers);
      }

      if (LIMIT_QUESTION >= currentQuestionIndex + 1) {
        setTimeout(async () => setNextQuestion(), 2000);
      } else {
        alert(`Go to Result page, corrected answers, ${correctedAnswers}`);
      }
    });
  }

  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }

  function resetState() {
    clearStatusClass(document.body);
    console.log('answerbuttonElement w reset', images);
    // while (answerButtonsElement.getAttribute) {
    images.forEach((img) => {
      img.removeAttribute('data-correct');
      img.classList.remove('wrong');
      img.classList.remove('correct');
    });
    // console.log(images.getAttribute('data-correct'));
    //  images.removeAttribute('data-correct');
    // }
  }

  async function setNextQuestion() {
    resetState();
    let isEmptyText;
    shuffledQuestions = await questions(saveRandomNumber());
    isEmptyText = shuffledQuestions.answers[0].text;
    console.log('czy puste', isEmptyText);

    while (isEmptyText === '') {
      resetState();
      shuffledQuestions = await questions(saveRandomNumber());
      console.log('szuffled question', shuffledQuestions);
      isEmptyText = shuffledQuestions.answers[0].text;
      console.log('is empty in loop', isEmptyText);
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
