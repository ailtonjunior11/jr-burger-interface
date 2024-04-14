/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const apiJrBurger = axios.create({
  baseURL: 'http://localhost:3001'
});

apiJrBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('jrburger:userData');
  const token = userData && JSON.parse(userData).token;
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export default apiJrBurger;
