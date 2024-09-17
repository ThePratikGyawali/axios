import axios from 'axios'; //
import api from '../api';

const instance = api.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // api url
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
