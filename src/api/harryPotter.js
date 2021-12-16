import categoryName from '../shared/categoryNameApi';

const BASE_API_URL = process.env.BASE_API_URL || 'http://hp-api.herokuapp.com/';

// const API_CHARACTERS_STUDENTS = 'api/characters/students';
// const API_CHARACTERS_STAFF = 'api/characters/staff';
// const API_CHARACTERS_HOUSES = 'api/characters/';

const getApiCategory = async (categoryId, id) => {
  const res = await fetch(BASE_API_URL + categoryId);
  const data = await res.json();
  // console.log('Wszystko', data);
  if (categoryId === categoryName.API_CHARACTERS_HOUSES) {
    const obj = { name: data[id].name, houses: data[id].house };
    // console.log('Wynik', obj);
    return { name: data[id].name, houses: data[id].house };
  }
  const obj = { name: data[id].name, image: data[id].image };
  // console.log('Wynik', obj);
  return obj;
};

getApiCategory(categoryName.API_CHARACTERS_STUDENTS, 5);
getApiCategory(categoryName.API_CHARACTERS_HOUSES, 5);
