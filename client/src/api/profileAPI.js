import axios from 'axios';


export const getProfile = async user => {
  try {
    
    const response = await axios.get(
      `http://3.36.114.117:8001/api/profile/${user}`
    );
    
    return response;
  } catch (e) {
    throw new Error(e);
  }
};