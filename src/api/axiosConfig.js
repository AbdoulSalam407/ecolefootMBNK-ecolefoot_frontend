import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecolefootmbnk-ecolefoot-backend-4.onrender.com/api/',
});

export default api;
