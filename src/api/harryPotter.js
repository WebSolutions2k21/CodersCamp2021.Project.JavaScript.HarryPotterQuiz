import categoryName from '../shared/categoryNameApi';

export const BASE_API_URL = process.env.BASE_API_URL || 'https://hp-api.herokuapp.com/';

export default function getApiQuestion(categoryId, temp1 = null, temp2 = null) {
  return async (id) => {
    const res = await fetch(BASE_API_URL + categoryId);
    const data = await res.json();
    if (categoryId === categoryName.API_CHARACTERS_HOUSES) {
      return { question: data[id].name, answers: [{ text: data[id].house, correct: true }] };
    }
    return {
      question: data[id].image,
      answers: [
        { text: data[id].name, correct: true },
        { text: data[temp1].name, correct: false },
        { text: data[temp2].name, correct: false },
      ],
    };
  };
}
