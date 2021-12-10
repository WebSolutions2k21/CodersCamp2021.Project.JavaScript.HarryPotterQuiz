import mapNavigationClickToTemplate from '../navigation';
import createQuizHousesPage from './quizHousesPage';

const createGameModePage = (rootElement) => {
  const appScreen = document.querySelector(rootElement);
  const gameModePage = document.querySelector('#gameModePage');

  appScreen.innerHTML = gameModePage.innerHTML;

  mapNavigationClickToTemplate(rootElement, '[data-action-houses]', createQuizHousesPage);


  // change placeholder 
  const form = document.querySelector("form");
  form.addEventListener("focus", function( event ) {
    event.target.style.background = "rgba(211, 166, 37, 1)";
  }, true);
  form.addEventListener("blur", function( event ) {
    event.target.style.background = "";
  }, true);
 
  
  // add border color 
  document.addEventListener("click", function(event){
    if(event.target.classList.contains("gameMode__btn")){
      event.target.classList.toggle("bor")  
    }
  });

};

export default createGameModePage;
