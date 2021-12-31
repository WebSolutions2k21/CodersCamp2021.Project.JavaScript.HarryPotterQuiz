import categoryName from '../shared/categoryNameApi';

export const BASE_API_URL = process.env.BASE_API_URL || 'http://hp-api.herokuapp.com/';

export default function getApiQuestion(categoryId, temp_Rec1= null, temp_Rec2=null) {
  return async (id) => {
    const res = await fetch(BASE_API_URL + categoryId);
    const data = await res.json();
    if (categoryId === categoryName.API_CHARACTERS_HOUSES) {
      return { question: data[id].name, answers: [{ text: data[id].house, answer: true }] };
    } else {
      return {
        question: data[id].image,
        answers: [
          { text: data[id].name, correct: true },
          { text: data[temp_Rec1].name, correct: false },
          { text: data[temp_Rec2].name, correct: false },
        ],
      };
    }
  };
}
