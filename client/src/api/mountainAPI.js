import axios from 'axios';

export const getAllMountains = async () => {
  try {
    const response = await axios.get('http://3.36.114.117:8001/api/mountain');
    return response.data;
  } catch (e) {
    throw Error(e);
  }
};
