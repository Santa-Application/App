import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const usePostForm = (pageInfo, isCreateForm) => {
  const postType = pageInfo.postType;
  const postDataName = `${postType}Post`;
  const history = useHistory();
  const params = useParams();
  const postId = params.postId;
  const loggedInUserInfo = useSelector(state => state.auth.userInfo);
  const loggedInUserId = loggedInUserInfo._id;

  // 작성 페이지인 경우 필요한 정보
  const loggedInUserName = loggedInUserInfo.name;
  const userName = params.userName;
  const isProfilePage = userName;
  const isLoggedInUserPage = userName === loggedInUserName;

  // 수정 페이지인 경우 필요한 정보
  const postsData = useSelector(state => state[postDataName].data);
  const postData = postsData.find(_data => _data[postDataName]._id === postId);
  const prevPost = postData && postData[postDataName];
  const publisherId = postData?.publisherInfo._id;
  const isUserPost = publisherId === loggedInUserId;

  useEffect(() => {
    if (
      (!isCreateForm && !isUserPost) ||
      (isProfilePage && !isLoggedInUserPage)
    )
      history.push('/page-not-found');
  });

  return [loggedInUserId, postId, prevPost];
};

export default usePostForm;
