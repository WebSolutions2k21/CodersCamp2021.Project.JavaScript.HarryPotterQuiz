// const BASE_API_URL = process.env.BASE_API_URL || 'http://hp-api.herokuapp.com/';

// import randomNumberOfIndex from './randomIndexGenerator';
// import categoryName from './categoryNameApi';

// //   const questionContainerElement = document.getElementById('question-container');
// //   const questionElement = document.getElementById('question');
// //   const answerButtonsElement = document.getElementById('answer-buttons');

// let shuffledQuestions;
// let currentQuestionIndex = 0;
// const LIMIT_QUESTION = 7;
// const ALL_RECORDS = 79; //pobrać tyle rekordów ile jest w api z tej kategorii
// let correctedAnswers = 0;

// //tymczasowe dorobić róźne
// let temp_Rec1 = Math.floor(Math.random() * 79 + 1);
// let temp_Rec2 = Math.floor(Math.random() * 79 + 1);
// // Pobrać dane z wylosownym indexem;
// // sprawdzić czy wylosowany numer juz został uzyty
// // jeśli tak wylosować następnu
// // Do danych dodać niepoprawne odpowiedzi
// // Po wyświetleniu sprawdzić

// const questions = newFunction(temp_Rec1, temp_Rec2);

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

// async function showQuestion(question, questionElement, answerButtonsElement) {
//   console.log('question', question.question);
//   if (question.question === '') {
//     getImageFromFile(question, questionElement);
//   }
//   console.log('question', question.question);
//   questionElement.setAttribute('src', question.question);
//   question.answers.sort(() => Math.random() - 0.5);
//   question.answers.forEach((answer) => {
//     const button = document.createElement('button');
//     console.log('tutaj w show question');
//     button.innerText = answer.text;
//     button.classList.add('btn');
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }

//     button.addEventListener('click', selectAnswer);
//     answerButtonsElement.appendChild(button);
//   });
// }

// function selectAnswer(e) {

//     const selectedButton = e.target;
//         console.log('Answer', answerButtonsElement);
//         Array.from(answerButtonsElement.children).forEach((buttonAnswer) => {
//             console.log("Answer", answerButtonsElements);
//           setStatusClass(buttonAnswer, buttonAnswer.dataset.correct);
//         });
//         currentQuestionIndex++;
//         console.log(currentQuestionIndex);
//         if (selectedButton.dataset.correct) {
//           correctedAnswers++;
//         }
//         if (LIMIT_QUESTION >= currentQuestionIndex + 1) {
//           setTimeout(async () => setNextQuestion(), 2000);
//         } else {
//           alert(`Go to Result page, corrected answers, ${correctedAnswers}`);
//         }
//   }

// function getImageFromFile(question, questionElement) {
//   console.log('wejdzie w zdjcie', question.answers[0].text);
//   let image = '../../assets/images/students/Adrian_Pucey.jpeg';
//   let image2 = 'assets/images/students/Adrian_Pucey.jpeg';

//   console.log('Sposób 1');
//   questionElement.setAttribute('src', image2.src);
//   console.log('Sposb 2');
//   questionElement.setAttribute('src', '../../assets/images/students/Adrian_Pucey.jpeg');
//   console.log('Sposób 3');
//   questionElement.style.background = 'assets/images/students/Adrian_Pucey.jpeg';
//   questionElement.style.background = 'assets/images/students/Adrian_Pucey.jpeg';
//   console.log('Sposób 4');
//   questionElement.style.backgroundImage = image;
//   console.log('Sposób 5', image);
//   questionElement.src = image;
// }

// function resetState(answerButtonsElement) {
//   clearStatusClass(document.body);
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//   }
// }

// async function setNextQuestion(answerButtonsElement, questionElement) {
//   resetState(answerButtonsElement);
//   shuffledQuestions = await await questions(randomNumberOfIndex(ALL_RECORDS));
//   await showQuestion(shuffledQuestions, questionElement, answerButtonsElement);
// }

// export async function startGame(questionContainerElement, answerButtonsElement, questionElement) {
//   shuffledQuestions = await questions(randomNumberOfIndex(ALL_RECORDS));
//   currentQuestionIndex = 0;
//   correctedAnswers = 0;
//   questionContainerElement.classList.remove('hide');
//   await setNextQuestion(shuffledQuestions, answerButtonsElement, questionElement);
// }

// function newFunction(temp_Rec1, temp_Rec2) {
//   return async (id) => {
//     const res = await fetch(BASE_API_URL + categoryName.API_CHARACTERS_STUDENTS);
//     const data = await res.json();

//     return {
//       question: data[id].image,
//       answers: [
//         { text: data[id].name, correct: true },
//         { text: data[temp_Rec1].name, correct: false },
//         { text: data[temp_Rec2].name, correct: false },
//       ],
//     };
//   };
// }
