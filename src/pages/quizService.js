function verifyAnswer() {
    const userAnswer = document.querySelector('.questions .active');
    if (userAnswer.textContent === rightAns) {
      rightNumber++;
    } else {
      falseNumber++;
    }

    eventListeners = () => {
      document.querySelector('#check').addEventListener('click', validateAnswer);
    };


  function validateAnswer() {
    if (document.querySelector('.questions .active')) {
      verifyAnswer();
    } else {
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('alert', 'alert-danger', 'col-md-6');
      errorDiv.textContent = 'Please select Answer';
      const questionsDiv = document.querySelector('.questions');
      questionsDiv.appendChild(errorDiv);

      setTimeout(() => {
        document.querySelector('.alert-danger').remove();
      }, 2000);
    }
  }
export default quizService;