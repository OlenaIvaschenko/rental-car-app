import axios from 'axios';

export const directApi = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
  // withCredentials: true,
});