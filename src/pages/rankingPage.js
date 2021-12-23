import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createRankingPage = () => {
  const appScreen = document.querySelector('#root');
  const rankingTemplate = document.querySelector('#rankingPage');

  appScreen.innerHTML = rankingTemplate.innerHTML;

  mapNavigationClickToTemplate('[data-action-home]', paths.home);

  const usersData = JSON.parse(localStorage.getItem('allPlayers'));

  if(usersData) {
    const students = [];
    const staff = [];
    const houses = [];

    const sortByHighestScore = (array) => {
      array = array.sort((a, b) => (a.score > b.score) ? -1 : 1);
      return array;
    }

    usersData.forEach(element => {
      if(element !== null){
        switch(element.category){
        case 'students':
          students.push(element);
        break;
        case 'staff':
          staff.push(element);
        break;
        case 'houses':
          houses.push(element);
        break;
        }
      } else {
        return false;
      }
      return sortByHighestScore(students), sortByHighestScore(staff),  sortByHighestScore(houses);
    });

    const studentsRanking = document.getElementById('rankingStudents');
    const staffRanking = document.getElementById('rankingStaff');
    const housesRanking = document.getElementById('rankingHouses');

    console.log(students)

    function displayResults(array, rankingElement) {
      for (let i = 0; i < 10; i++) {
        const el = document.createElement("div");
        el.setAttribute('class', 'ranking__list--item');
        el.innerHTML = `<p>${i + 1}. <span>${array[i].name}</span></p><p class="points">${array[i].score}<span>PT</span></p>`;
        rankingElement.appendChild(el);
      }
    }

    if(houses.length > 0){
      displayResults(houses, housesRanking);
    } else {
      console.log('empty houses array')
    }

    if(students.length > 0){
      displayResults(students, studentsRanking);
    } else {
      console.log('empty students array')
    }

    if(staff.length > 0){
      displayResults(staff, staffRanking);
    } else {
      console.log('empty staff array')
    }

  } else {
    console.log('Nic tu nie ma');
  }
};

export default createRankingPage;
