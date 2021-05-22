import axios from 'axios';
import { URI } from 'utils';

export const getAllMountains = async () => {
  try {
    const response = await axios.get(`${URI}mountain`);
    return response.data;
  } catch (e) {
    throw Error(e);
  }
};
