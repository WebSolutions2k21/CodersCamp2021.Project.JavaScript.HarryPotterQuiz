import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';
import categoryName from '../shared/categoryNameApi';
import randomNumberOfIndex from './randomIndexQuizQuestion';

const createQuizStudentsPage = () => {
  const appScreen = document.querySelector('#root');
  const quizStudentsPage = document.querySelector('#quizStudentsPage');

  appScreen.innerHTML = quizStudentsPage.innerHTML;

  mapNavigationClickToTemplate('[data-action-home]', paths.home);
  const BASE_API_URL = process.env.BASE_API_URL || 'http://hp-api.herokuapp.com/';

  const nextButton = document.getElementById('next-btn');
  const questionContainerElement = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');

  let shuffledQuestions;
  let currentQuestionIndex = 0;
  const LIMIT_QUESTION = 7;
  const ALL_RECORDS = 5; //pobrać tyle rekordów ile jest w api z tej kategorii
  let correctedAnswers = 0;


  //tymczasowe dorobić róźne
  let temp_Rec1 = Math.floor(Math.random() * 79 + 1);
  let temp_Rec2 = Math.floor(Math.random() * 79 + 1);
  // Pobrać dane z wylosownym indexem;
  // sprawdzić czy wylosowany numer juz został uzyty
  // jeśli tak wylosować następnu
  // Do danych dodać niepoprawne odpowiedzi
  // Po wyświetleniu sprawdzić

  const questions = async (id) => {
    const res = await fetch(BASE_API_URL + categoryName.API_CHARACTERS_STUDENTS);
    const data = await res.json();
   
    return { question: data[id].image, answers: [{ text: data[id].name, correct: true }, 
    { text: data[temp_Rec1].name, correct: false},
    { text: data[temp_Rec2].name, correct: false }] };
  };

  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }

  function setStatusClass(element, correct) {
    console.log('wejdzie tu');
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }

  async function showQuestion(question) {
    questionElement.setAttribute('src', question.question);
    question.answers.forEach((answer) => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
        correctedAnswers++;
        console.log('corrected answer', correctedAnswers);
      }
      button.addEventListener('click', (e) => {
        const selectedButton = e.target;
console.log('selected answer', selectedButton);
        Array.from(answerButtonsElement.children).forEach((buttonAnswer) => {
          setStatusClass(buttonAnswer, buttonAnswer.dataset.correct);
        });
        console.log('current question index', currentQuestionIndex);
        if (LIMIT_QUESTION >= currentQuestionIndex + 1) {
          console.log('pętla w if limit', currentQuestionIndex + 1);
          nextButton.classList.remove('hide');
        } else {
        alert(`Go to Result page, corrected answers, ${correctedAnswers}`);
        }
      });
      answerButtonsElement.appendChild(button);
    });
  }

  function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  async function setNextQuestion() {
    resetState();
    console.log('jestem w set nex question');
    shuffledQuestions = await questions(randomNumberOfIndex(ALL_RECORDS));
    await showQuestion(shuffledQuestions);
  }

  async function startGame() {
    shuffledQuestions = await questions(randomNumberOfIndex(ALL_RECORDS));
    currentQuestionIndex = 0;
    correctedAnswers=0;
    questionContainerElement.classList.remove('hide');
    await setNextQuestion(shuffledQuestions);
  }

  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
  });

  startGame();
};
export default createQuizStudentsPage;
