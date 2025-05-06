import { Axios } from 'axios'; // se você quiser criar instâncias específicas

const api = Axios.create({
  baseURL: 'https://api.disneyapi.dev/character',  
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;  // exportação padrão
