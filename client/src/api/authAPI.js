import axios from 'axios';
import { URI } from 'utils';

export const register = async newUser => {
  try {
    const formdata = new FormData();
    for (let key in newUser) formdata.append(key, newUser[key]);

    const response = await axios.post(`${URI}user/register`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const signin = async user => {
  try {
    const response = await axios.post(`${URI}user/signin`, user);

    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const signout = async user => {
  try {
    const response = await axios.post(`${URI}user/signout`, user);

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
