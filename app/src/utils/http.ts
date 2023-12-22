import axios from 'axios';

export const get = (url: string) => {
  return axios.get(url);
};

export const patch = (url: string, data?: any) => {
  return axios.patch(url, data);
};

export const post = (url: string, data?: any) => {
  return axios.post(url, data);
};

const http = { get, patch, post };

export default http;
