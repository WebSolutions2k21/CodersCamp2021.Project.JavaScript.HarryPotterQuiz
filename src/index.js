const HP_API_BASE_URL = process.env.BASE_API_URL || "http://hp-api.herokuapp.com/";
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME? process.env.QUIZ_MAX_TIME : 60;

const API_CHARACTERS ='api/characters/students';

fetch(HP_API_BASE_URL+API_CHARACTERS)

.then(res => res.json())
.then(data => console.log(data))

.catch(err => console.error(err))