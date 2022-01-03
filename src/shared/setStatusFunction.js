function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// eslint-disable-next-line import/prefer-default-export
export function setStatusFunction(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}
