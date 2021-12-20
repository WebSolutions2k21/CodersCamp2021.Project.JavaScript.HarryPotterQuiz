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

  const startButton = document.getElementById('start-btn');
  const nextButton = document.getElementById('next-btn');
  const questionContainerElement = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');

  let shuffledQuestions;
  let currentQuestionIndex;

  const questions = [
    {
      question: 'http://hp-api.herokuapp.com/images/harry.jpg',
      answers: [
        { text: 'Harry Potter', answer: true },
        { text: 'Ron Weasley', answer: false },
      ],
    },
    {
      question: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      answers: [{ text: 'Hermione Granger', answer: true }],
    },
    { question: 'http://hp-api.herokuapp.com/images/ron.jpg', answers: [{ text: 'Ron Weasley', answer: true }] },
    { question: 'http://hp-api.herokuapp.com/images/draco.jpg', answers: [{ text: 'Draco Malfoy', answer: true }] },
  ];

  //Pobrać dane z wylosownym indexem;
  //sprawdzić czy wylosowany numer juz został uzyty
  //jeśli tak wylosować następnu
  //Do danych dodać niepoprawne odpowiedzi
  //Po wyświetleniu sprawdzić

  const question2 = async (id) => {
    const res = await fetch(BASE_API_URL + categoryName.API_CHARACTERS_STUDENTS);
    const data = await res.json();
    console.log('Wszystko', data);

    const obj = { question: data[id].image, answers: [{ text: data[id].name, answer: true }] };
    console.log(obj);
    return obj;
  };

  let myResult;

  (async () => {
    myResult = await question2(randomNumberOfIndex(5));
    console.log('question 2', myResult);
  })();



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
    console.log('Start');
    questionElement.setAttribute('src', question.question);
    question.answers.forEach((answer) => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', (e) => {
        const selectedButton = e.target;
        console.log('click na button');
        const { correct } = selectedButton.dataset;
        setStatusClass(document.body, correct);
        Array.from(answerButtonsElement.children).forEach((buttonAnswer) => {
          setStatusClass(buttonAnswer, buttonAnswer.dataset.correct);
        });
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
          nextButton.classList.remove('hide');
        } else {
          startButton.innerText = 'Restart';
          startButton.classList.remove('hide');
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

  function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  async function startGame() {
    console.log('my result', myResult);
    shuffledQuestions = await question2(randomNumberOfIndex(5));

    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
  }

  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
  });

  startGame();
  // const questions = [
  //   { answers:['Hermione Granger'] , image: 'http://hp-api.herokuapp.com/images/hermione.jpeg', answer: true },
  //   { answers:[] 'Ron Weasley', image: 'http://hp-api.herokuapp.com/images/ron.jpg', answer: true },
  //   { answers:[] 'Draco Malfoy', image: 'http://hp-api.herokuapp.com/images/draco.jpg', answer: true },
  //   { answers:[] 'Cedric Diggory', image: 'http://hp-api.herokuapp.com/images/cedric.png', answer: true },
  //   { answers:[] 'Cho Chang', image: 'http://hp-api.herokuapp.com/images/cho.jpg', answer: true },
  //   { answers:[] 'Neville Longbottom', image: 'http://hp-api.herokuapp.com/images/neville.jpg', answer: true },
  //   { answers:[] 'Luna Lovegood', image: 'http://hp-api.herokuapp.com/images/luna.jpg', answer: true },
  //   { answers:[] 'Ginny Weasley', image: 'http://hp-api.herokuapp.com/images/ginny.jpg', answer: true },
  //   { answers:[] 'Vincent Crabbe', image: 'http://hp-api.herokuapp.com/images/crabbe.jpg', answer: true },
  //   { answers:[] 'Gregory Goyle', image: 'http://hp-api.herokuapp.com/images/goyle.jpg', answer: true },
  // ];
};
export default createQuizStudentsPage;
