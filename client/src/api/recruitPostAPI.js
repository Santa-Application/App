import axios from 'axios';

const URI = process.env.WEB_SERVER_URI;

export const getAllRecruitPosts = async () => {
  try {
    const response = await axios.get(`${URI}recruitpost`);
    return response.data;
  } catch (e) {
    throw Error(e);
  }
};

export const getRecruitPostById = async id => {
  try {
    const response = await axios.get(`${URI}recruitpost/${id}`);
    return response.data;
  } catch (e) {
    throw Error(e);
  }
};

export const createRecruitPost = async newPost => {
  try {
    const response = await axios.post(`${URI}recruitpost/newpost`, newPost);

    return response.data;
  } catch (e) {
    throw Error(e);
  }
};

export const updateRecruitPost = async (id, updatePost) => {
  try {
    const response = await axios.patch(`${URI}recruitpost/${id}`, updatePost);

    return response.data;
  } catch (e) {
    throw Error(e);
  }
};

export const removeRecruitPost = async id => {
  try {
    const response = await axios.delete(`${URI}recruitpost/${id}`);

    return response.data;
  } catch (e) {
    throw Error(e);
  }
};

/*
response data of toggle to join recruiting
[
  {
    id: { type: String },
    accessibleURL: { type: String } // user image URL
  }
]
*/
export const toggleApplyRecruiting = async (postId, userId) => {
  try {
    const response = await axios.post(`${URI}recruitpost/${postId}/${userId}`);

    return response.data;
  } catch (e) {
    throw Error(e);
  }
};
