import axios from 'axios';

const URI = process.env.WEB_SERVER_URI;

export const getAllMountains = async () => {
  try {
    const response = await axios.get(`${URI}mountain`);
    return response.data;
  } catch (e) {
    throw Error(e);
  }
};
