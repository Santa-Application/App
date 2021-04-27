import axios from 'axios';

/*
response data of posts
[
  {
    
  }
]
*/
export const getAllRecruitPosts = async () => {
  try {
    const response = await axios.get(
      'http://3.36.114.117:8001/api/recruitpost'
    );
    return response.data;
  } catch (e) {
    throw Error(e);
  }
};

export const getRecruitPostById = async id => {
  try {
    const response = await axios.get(
      `http://3.36.114.117:8001/api/recruitpost/${id}`
    );
    return response.data;
  } catch (e) {
    throw Error(e);
  }
};

export const createRecruitPost = async newPost => {
  try {
    const response = await axios.post(
      'http://3.36.114.117:8001/api/recruitpost/newpost',
      newPost
    );

    return response.data;
  } catch (e) {
    throw Error(e);
  }
};

export const updateRecruitPost = async (id, updatePost) => {
  try {
    const response = await axios.patch(
      `http://3.36.114.117:8001/api/recruitpost/${id}`,
      updatePost
    );

    return response.data;
  } catch (e) {
    throw Error(e);
  }
};

export const removeRecruitPost = async id => {
  try {
    const response = await axios.delete(
      `http://3.36.114.117:8001/api/recruitpost/${id}`
    );

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
    const response = await axios.post(
      `http://3.36.114.117:8001/api/recruitpost/${postId}/${userId}`
    );

    return response.data;
  } catch (e) {
    throw Error(e);
  }
};
