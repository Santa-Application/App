import axios from 'axios';

const URI = process.env.REACT_APP_WEB_SERVER_URI;

export const getProfile = async id => {
  try {
    const response = await axios.get(`${URI}profile/${id}`);

    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const getUserInfoData = async userName => {
  try {
    const response = await axios.get(`${URI}profile/name/${userName}`);

    return response;
  } catch (e) {
    throw new Error(e);
  }
};
