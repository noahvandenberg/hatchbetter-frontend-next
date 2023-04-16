import axios from 'axios';

export const fetcher = async (url: string) => {
  const response = await axios.get(`http://localhost:3001${url}`);
  return response.data;
};