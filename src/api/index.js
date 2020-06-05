import axios from 'axios';
const baseURL = 'https://burger-2ae9d.firebaseio.com/';

export default axios.create({
  baseURL,
  headers: {
    'Content-Language': 'ru-RU',
    'Content-Type': 'application/json',
  },
});