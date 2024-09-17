import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // api url
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;

