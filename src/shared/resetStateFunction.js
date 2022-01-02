function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

export function resetStateFunction( answerButtonsElement) {
  clearStatusClass(document.body);
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
