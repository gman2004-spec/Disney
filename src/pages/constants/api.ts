import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.disneyapi.dev/character',
});

export default api;
