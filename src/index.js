import 'regenerator-runtime/runtime'; // async/await with Parcel
import App from './App';

const BASE_API_URL = process.env.API_BASE_URL || 'https://google.com';
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS || 120;

window.onload = () => App({ rootElement: '#root', options: { apiUrl: BASE_API_URL, quizMaxTime: QUIZ_MAX_TIME } });
