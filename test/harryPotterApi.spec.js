import categoryName from '../src/shared/categoryNameApi';
import getApiQuestion from '../src/api/harryPotter';

describe('Test Harry Potter API to get appreciate image', () => {
  it('Given HP id is 5 when asking for data, should get name and image of the HP', async () => {
    // given
    const categoryId = categoryName.API_CHARACTERS_STUDENTS;
    const numberOfIndexApi = 5;
    // when
    const questions = getApiQuestion(categoryId, 3, 6);
    (async () => {
      const harryPotterData = await questions(numberOfIndexApi);
      // then
      expect(harryPotterData).toContain({
        image: 'http://hp-api.herokuapp.com/images/cho.jpg',
        name: 'Cho Chang',
      });
    })();
  });
});
