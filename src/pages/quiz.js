import randomNumberOfIndex from '../shared/randomIndexGenerator';
import getDataFromApi from '../api/harryPotter';
import categoryName from '../shared/categoryNameApi';
import { showQuestionFunction } from '../shared/showQuestionFunction';
import { setStatusFunction } from '../shared/setStatusFunction';
import { resetStateFunction } from '../shared/resetStateFunction';
import img from '../../assets/images/students/*.jpeg';

const createQuiz = () => {
  const appScreen = document.querySelector('#root');
  const quiz = document.querySelector('#quiz');

  appScreen.innerHTML = quiz.innerHTML;

  const questionContainerElement = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');

  let shuffledQuestions;
  let currentQuestionIndex = 0;
  const LIMIT_QUESTION = 7;
  const ALL_RECORDS = 60; //pobrać tyle rekordów ile jest w api z tej kategorii
  let correctedAnswers = 0;
  const categoryId = categoryName.API_CHARACTERS_STUDENTS;
  //tymczasowe dorobić róźne
  let temp_Rec1 = Math.floor(Math.random() * 79 + 1);
  let temp_Rec2 = Math.floor(Math.random() * 79 + 1);
  // Pobrać dane z wylosownym indexem;
  // sprawdzić czy wylosowany numer juz został uzyty
  // jeśli tak wylosować następnu
  // Do danych dodać niepoprawne odpowiedzi
  // Po wyświetleniu sprawdzić

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
};

export default createQuiz;

