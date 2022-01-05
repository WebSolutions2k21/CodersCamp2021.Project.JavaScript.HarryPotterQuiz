import i18next from '../i18n';
import mapNavigationClickToTemplate from '../navigation';
import { paths } from '../shared/router';

const createRankingPage = () => {
  const appScreen = document.querySelector('#root');
  const rankingTemplate = document.querySelector('#rankingPage');
  const { t, changeLanguage } = i18next;

  appScreen.innerHTML = rankingTemplate.innerHTML;

  document.querySelector('[data-lang-rankingpage-header]').innerText = t('rankingpage-header');
  document.querySelector('[data-action-students]').innerText = t('students');
  document.querySelector('[data-action-staff]').innerText = t('staff');
  document.querySelector('[data-action-houses]').innerText = t('houses');
  document.querySelector('[data-action-back]').innerText = t('back');
  mapNavigationClickToTemplate('[data-action-home]', paths.home);

  const usersData = JSON.parse(localStorage.getItem('allPlayers'));

  if (usersData) {
    const students = [];
    const staff = [];
    const houses = [];

    const sortByHighestScore = (array) => {
      array = array.sort((a, b) => (a.score > b.score ? -1 : 1));
      return array;
    };

    usersData.forEach((element) => {
      if (element !== null) {
        switch (element.category) {
          case 'students':
            students.push(element);
            break;
          case 'staff':
            staff.push(element);
            break;
          case 'houses':
            houses.push(element);
            break;
          default:
            return false;
        }
      } else {
        return false;
      }
      return sortByHighestScore(students), sortByHighestScore(staff), sortByHighestScore(houses);
    });

    const studentsRanking = document.getElementById('rankingStudents');
    const staffRanking = document.getElementById('rankingStaff');
    const housesRanking = document.getElementById('rankingHouses');

    const displayResults = (array, rankingElement) => {
      for (let i = 0; i < (array.length < 3 ? array.length : 3); i++) {
        const el = document.createElement('div');
        el.setAttribute('class', 'ranking__list--item');
        el.innerHTML = `<p>${i + 1}. <span>${array[i]?.name}</span></p><p class="points">${
          array[i]?.score
        }<span>PT</span></p>`;
        rankingElement.appendChild(el);
      }
    };

    // eslint-disable-next-line no-unused-expressions
    houses.length > 0 ? displayResults(houses, housesRanking) : false;
    // eslint-disable-next-line no-unused-expressions
    students.length > 0 ? displayResults(students, studentsRanking) : false;
    // eslint-disable-next-line no-unused-expressions
    staff.length > 0 ? displayResults(staff, staffRanking) : false;
  } else {
    return false;
  }
};

export default createRankingPage;
