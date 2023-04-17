import axios from 'axios';

export const fetcher = async (url: string) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
  return response.data;
};