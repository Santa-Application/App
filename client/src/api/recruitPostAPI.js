import axios from 'axios';

/*
response data of posts
[
  {
    mountainName: { type: String, required: true },
    recruitingNumber: { type: Number, required: true },
    recruitingLevels: [{ type: String, required: true }],
    recruitingSex: { type: String, required: true },
    recruitingAge: { type: Array },
    postdate: { type: Date, default: Date.now, required: true },
    description: String,
    views: { type: Number, default: 0 },
    recruiterID: { type: String, required: true },
    recruitees: [{ type: String }],
    recruitDate: { type: String, required: true },
    title: { type: String, required: true },
    name: { type: String },
    accessibleURL: { type: String } // publisher image URL
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
      'http://3.36.114.117:8001/api/recruitpost',
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
export const toggleToJoinRecruiting = async (postId, userId) => {
  try {
    const response = await axios.post(
      `http://3.36.114.117:8001/api/recruitpost/${postId}/${userId}`
    );

    return response.data;
  } catch (e) {
    throw Error(e);
  }
};
