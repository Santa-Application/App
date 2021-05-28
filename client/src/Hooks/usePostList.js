import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingIcon, Error } from 'components';
import { getRecruitPostsAsync } from 'redux/modules/recruitPost';
import { getRegularPostsAsync } from 'redux/modules/regularPost';
import { filterPostsData } from 'utils/dataFilteringUtils';

const getPostThunk = {
  recruit: getRecruitPostsAsync,
  regular: getRegularPostsAsync,
};

const usePostList = pageInfo => {
  const postType = pageInfo.postType;
  const postDataName = `${postType}Post`;

  const state = useSelector(state => state[postDataName]);
  const { isLoading, data, error } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostThunk[postType]());
  }, [dispatch, postType]);

  useEffect(() => {
    if (isLoading) return <LoadingIcon />;
    if (error) return <Error />;
  }, [isLoading, error]);

  const postsData = filterPostsData(data, pageInfo);

  return postsData;
};

export default usePostList;
