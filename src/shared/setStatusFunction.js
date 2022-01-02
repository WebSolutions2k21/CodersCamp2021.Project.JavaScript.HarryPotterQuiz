function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}


export function setStatusFunction( element, correct) {
   clearStatusClass(element);
   console.log("element", element, correct);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}
