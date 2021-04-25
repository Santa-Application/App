import axios from 'axios';

const URI = 'http://3.36.114.117:8001/api/user/';

export const register = async newUser => {
  try {
    const formdata = new FormData();
    for ( let key in newUser) formdata.append(key, newUser[key]);
    
    const response = await axios.post(
      'http://3.36.114.117:8001/api/user/register',
      formdata,
      {
        headers: {
          'Content-Type': 'multipart/form-data' 
        }
      }
    );
    
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const signin = async user => {
  try {
    const formdata = new FormData();
    for ( let key in user) formdata.append(key, user[key]);

    const response = await axios.post(
      `${URI}signin`,
      formdata,
      {
        headers: {
          'Content-Type': 'multipart/form-data' 
        }
      }
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