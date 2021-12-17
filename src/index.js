import 'regenerator-runtime/runtime'; // async/await with Parcel
import App from './App';

const BASE_API_URL = process.env.BASE_API_URL || 'http://hp-api.herokuapp.com/';
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS || 120;

window.onload = () => App({ options: { apiUrl: BASE_API_URL, quizMaxTime: QUIZ_MAX_TIME } });
