import guessWho from '../../assets/images/guessWho.jpeg';

function getImageFromFile(question) {
  const nameFromAnswer = question.answers[0].text;
  const joinName = nameFromAnswer.replace(' ', '_');
  return joinName;
}

// eslint-disable-next-line import/prefer-default-export
export function showQuestionFunc(question, questionElement, showAnswer, answerButtonsElement, img) {
  if (question.question === '') {
    const getImg = getImageFromFile(question);
    if (img[getImg] === null || img[getImg] === undefined) {
      questionElement.setAttribute('src', guessWho);
    } else {
      questionElement.setAttribute('src', img[getImg]);
    }
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
