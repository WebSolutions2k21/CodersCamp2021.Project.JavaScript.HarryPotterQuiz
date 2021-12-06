const BASE_API_URL = process.env.BASE_API_URL || 'http://hp-api.herokuapp.com/';

const API_CHARACTERS = 'api/characters/students';

fetch(BASE_API_URL + API_CHARACTERS)

  .then((res) => res.json())
  .then((data) => console.log(data))

  .catch((err) => console.error(err));
