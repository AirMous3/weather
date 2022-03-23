import axios from 'axios';

export const weatherApi = {
  getInfo() {
    return axios.get('');
  },
};
