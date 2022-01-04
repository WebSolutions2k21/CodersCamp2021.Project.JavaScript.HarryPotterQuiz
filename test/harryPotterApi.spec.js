import categoryName from '../src/shared/categoryNameApi';
import getApiQuestion from '../src/api/harryPotter';

describe('Test Harry Potter API to get appreciate image', () => {
  it('Given HP id is 5 when asking for data, should get name and image of the HP', async () => {
    fetch.mockResponseOnce(
      JSON.stringify([
        { image: '', name: '' },
        { image: '', name: '' },
        { image: '', name: '' },
        { image: '', name: '' },
        { image: '', name: '' },
        { image: 'http://hp-api.herokuapp.com/images/cho.jpg', name: 'Cho Chang' },
      ]),
    );
    // given
    const categoryId = categoryName.API_CHARACTERS_STUDENTS;
    const numberOfIndexApi = 5;
    // when
    const apiQuestion = getApiQuestion(categoryId, 0, 1);
    const harryPotterData = await apiQuestion(numberOfIndexApi);
    // then
    expect(harryPotterData).toEqual({
      answers: [
        { correct: true, text: 'Cho Chang' },
        { correct: false, text: '' },
        { correct: false, text: '' },
      ],
      question: 'http://hp-api.herokuapp.com/images/cho.jpg',
    });
  });
});
