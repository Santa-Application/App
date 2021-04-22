import axios from 'axios';

const URI = 'http://3.36.114.117:8001/api/user/';

export const register = async newUser => {
  try {
    const response = await axios.post(
      `${URI}register`,
      newUser
    );

    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const signin = async user => {
  try {
    const response = await axios.post(
      `${URI}signin`,
      user
    );

    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const signout = async user => {
  try {
    const response = await axios.post(
      `${URI}signout`,
      user
    );

    return response;
  } catch (e) {
    throw new Error(e);
  }
};