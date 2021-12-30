import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';
const questionContainerElement = document.getElementById('question-container-houses');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions;
let currentQuestionIndex = 0;
const LIMIT_QUESTION = 7;
const ALL_RECORDS = 279; //pobrać tyle rekordów ile jest w api z tej kategorii
let correctedAnswers = 0;

const createQuizHousesPage = (options) => {
  const appScreen = document.querySelector('#root');
  const quizHousesPage = document.querySelector('#quizHousesPage');

  appScreen.innerHTML = quizHousesPage.innerHTML;

  console.log('max time ', options.quizMaxTime);

  // const questions = getHouses();

  // function clearStatusClass(element) {
  //   element.classList.remove('correct');
  //   element.classList.remove('wrong');
  // }

  // function setStatusClass(element, correct) {
  //   clearStatusClass(element);
  //   if (correct) {
  //     element.classList.add('correct');
  //   } else {
  //     element.classList.add('wrong');
  //   }
  // }

  // async function showQuestion(question) {
  //   console.log('question', question.question);

  //   question.answers.sort(() => Math.random() - 0.5);
  //   question.answers.forEach((answer) => {
  //     const button = document.createElement('button');
  //     button.innerText = answer.text;
  //     button.classList.add('btn');
  //     if (answer.correct) {
  //       button.dataset.correct = answer.correct;
  //     }

  //     showAnswer(button);
  //     answerButtonsElement.appendChild(button);
  //   });
  // }

  // function showAnswer(button) {
  //   button.addEventListener('click', (e) => {
  //     const selectedButton = e.target;

  //     Array.from(answerButtonsElement.children).forEach((buttonAnswer) => {
  //       setStatusClass(buttonAnswer, buttonAnswer.dataset.correct);
  //     });
  //     currentQuestionIndex++;
  //     console.log(currentQuestionIndex);
  //     if (selectedButton.dataset.correct) {
  //       correctedAnswers++;
  //     }
  //     if (LIMIT_QUESTION >= currentQuestionIndex + 1) {
  //       setTimeout(async () => setNextQuestion(), 2000);
  //     } else {
  //       alert(`Go to Result page, corrected answers, ${correctedAnswers}`);
  //     }
  //   });
  // }

  // function resetState() {
  //   clearStatusClass(document.body);
  //   while (answerButtonsElement.firstChild) {
  //     answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  //   }
  // }

  // async function setNextQuestion() {
  //   resetState();
  //   shuffledQuestions = await await questions(randomNumberOfIndex(ALL_RECORDS));
  //   await showQuestion(shuffledQuestions);
  // }

  // async function startGame() {
  //   shuffledQuestions = await questions(randomNumberOfIndex(ALL_RECORDS));
  //   currentQuestionIndex = 0;
  //   correctedAnswers = 0;
  //   questionContainerElement.classList.remove('hide');
  //   await setNextQuestion(shuffledQuestions);
  // }

  // startGame();

  mapNavigationClickToTemplate('[data-action-home]', paths.home);
};

export default createQuizHousesPage;

// function getHouses() {
//   return async (id) => {
//     const res = await fetch(BASE_API_URL + categoryName.API_CHARACTERS_HOUSES);
//     const data = await res.json();
//     return { question: data[id].name, answers: [{ text: data[id].house, answer: true }] };

//   };
// }
