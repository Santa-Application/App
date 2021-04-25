import axios from 'axios';

/*
--API return 값들--
getAllRegularPosts : 포스트 정보 + 작성자 이름(name), 작성자 프로필 이미지(accessibleURL)의 객체들이 담긴 배열
[
  {
    
  }
]
*/
export const getAllRegularPosts = async () => {
  const response = await axios.get('http://3.36.114.117:8001/api/regularpost');

  return response.data;
};

export const getRegularPostById = async id => {
  const response = await axios.get(
    `http://3.36.114.117:8001/api/regularpost/${id}`
  );

  return response.data;
};

export const createRegularPost = async newPost => {
  const response = await axios.post(
    'http://3.36.114.117:8001/api/regularpost',
    newPost
  );

  return response.data;
};

export const updateRegularPost = async (id, updatePost) => {
  const response = await axios.patch(
    `http://3.36.114.117:8001/api/regularpost/${id}`,
    updatePost
  );

  return response.data;
};

export const removeRegularPost = async id => {
  const response = await axios.delete(
    `http://3.36.114.117:8001/api/regularpost/${id}`
  );

  return response.data;
};

export const likeRegularPost = async id => {
  const response = await axios.patch(
    `http://3.36.114.117:8001/api/regularpost/${id}/like`
  );

  return response.data;
};
