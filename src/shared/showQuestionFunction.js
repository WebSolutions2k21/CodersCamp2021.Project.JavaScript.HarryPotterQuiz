import img from '../../assets/images/students/*.jpeg';

function getImageFromFile(question) {
  let nameFromAnswer = question.answers[0].text;
  let joinName = nameFromAnswer.replace(' ', '_');
  return joinName;
}

export function showQuestionFunction(question, questionElement, showAnswer, answerButtonsElement, img) {
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
