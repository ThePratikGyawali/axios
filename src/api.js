import axios from 'axios';
import api from '../api'; // could do this but its outside src so cant

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // api url
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
