import randomNumberOfIndex from '../shared/randomIndexGenerator';
import img from '../../assets/images/students/*.jpeg';
import getApiQuestion from '../api/harryPotter';
import categoryName from '../shared/categoryNameApi';

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

  const questions = getApiQuestion(categoryId, temp_Rec1, temp_Rec2);

  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }

  async function showQuestion(question) {
    if (question.question === '') {
      const getImg = getImageFromFile(question);
      console.log('get img', getImg);
      questionElement.setAttribute('src', img[getImg]);
    } else {
      questionElement.setAttribute('src', question.question);
    }
    question.answers.sort(() => Math.random() - 0.5);
    question.answers.forEach((answer) => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }

      showAnswer(button);
      answerButtonsElement.appendChild(button);
    });
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

  function getImageFromFile(question) {
    let nameFromAnswer = question.answers[0].text;
    let joinName = nameFromAnswer.replace(' ', '_');
    return joinName;
  }

  function resetState() {
    clearStatusClass(document.body);
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
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
