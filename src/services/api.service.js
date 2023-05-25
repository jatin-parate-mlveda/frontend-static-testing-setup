import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const login = async (userName, password) =>
  axiosInstance.post('/auth/login', { userName, password });
