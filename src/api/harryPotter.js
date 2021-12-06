const BASE_API_URL = process.env.BASE_API_URL || 'http://hp-api.herokuapp.com/';

const API_CHARACTERS_STUDENTS = 'api/characters/students';
const API_CHARACTERS_STAFF = 'api/characters/staff';
const API_CHARACTERS_HOUSES = 'api/characters/';

// Students 79 records
const harryPotterApiStudents = () => {
  fetch(BASE_API_URL + API_CHARACTERS_STUDENTS)
    .then((res) => res.json())
    .then((data) => {
      console.log('All students records', data);
      console.log('example name 1', data[0].name, 'img', data[0].image);
      console.log('example name 60', data[69].name, 'img', data[69].image);
    })
    .catch((err) => console.error(err));
};

// Staff 23 records
const harryPotterApiStaff = () => {
  fetch(BASE_API_URL + API_CHARACTERS_STAFF)
    .then((res) => res.json())
    .then((data) => {
      console.log('All staff records', data);
      console.log('example name 1', data[0].name, 'img', data[0].image);
      console.log('example name 2', data[2].name, 'img', data[2].image);
    })
    .catch((err) => console.error(err));
};

// Houses 291 records
const harryPotterApiHouses = () => {
  fetch(BASE_API_URL + API_CHARACTERS_HOUSES)
    .then((res) => res.json())
    .then((data) => {
      console.log('All houses records', data);
      console.log('example name 1', data[0].name, 'house', data[0].house);
      console.log('example name 5', data[5].name, 'house', data[5].house);
    })
    .catch((err) => console.error(err));
};
harryPotterApiStudents();
harryPotterApiStaff();
harryPotterApiHouses();
