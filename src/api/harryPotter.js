import categoryName from '../shared/categoryNameApi';

const BASE_API_URL = process.env.BASE_API_URL || 'http://hp-api.herokuapp.com/';

const getApiCategory = async (categoryId, id) => {
  const res = await fetch(BASE_API_URL + categoryId);
  const data = await res.json();
  // console.log('Wszystko', data);
  if (categoryId === categoryName.API_CHARACTERS_HOUSES) {
    return { question: data[id].name, answers: [{ text: data[id].house, answer: true }] };
  }
  const obj = { question: data[id].image, answers: [{ text: data[id].name, answer: true }] };
  // sconsole.log(obj);
  return obj;
};

// getApiCategory(categoryName.API_CHARACTERS_STUDENTS, 5);
// getApiCategory(categoryName.API_CHARACTERS_HOUSES, 5);

// let id = 0;
// while (id < 20) {
//   const keys = Object.keys(getApiCategory(categoryName.API_CHARACTERS_STUDENTS, id));
//   console.log(keys);
//   id++;
// }

// const keys = Object.keys(getApiCategory(categoryName.API_CHARACTERS_STUDENTS, 5));
// console.log(keys);
export default getApiCategory;