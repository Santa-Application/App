import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {
  removeRecruitPostAsync,
  toggleApplyRecruitingAsync,
} from 'redux/modules/recruitPost';
import { removeRegularPostAsync } from 'redux/modules/regularPost';
import { moveToFormPagePath, moveToListPage } from 'utils/pathUtils';

const removeHandler = {
  recruit: removeRecruitPostAsync,
  regular: removeRegularPostAsync,
};

const usePostDetail = (pageInfo, isApplied, setIsApplied) => {
  const postType = pageInfo.postType;
  const postDataName = `${postType}Post`;

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const postId = params.postId;
  const userId = useSelector(state => state.auth.userInfo._id);
  const postsData = useSelector(state => state[postDataName]);
  const postData = postsData.data.find(
    data => data[postDataName]._id === postId
  );
  const publisherId = postData.publisherInfo._id;
  const isUserPublisher = publisherId === userId;

  const handleClickEditPost = useCallback(() => {
    moveToFormPagePath(history)(pageInfo, postId, 'edit');
  }, [pageInfo, postId, history]);

  const handleClickRemovePost = useCallback(async () => {
    const removePostAsync = removeHandler[postType];
    await dispatch(removePostAsync(postId));
    moveToListPage(history)(pageInfo);
  }, [pageInfo, postId, postType, history, dispatch]);

  const handlers = {
    handleClickEditPost,
    handleClickRemovePost,
  };

  if (postType === 'recruit') {
    const handleChangeApplyRecruitingButton = async () => {
      await dispatch(toggleApplyRecruitingAsync(postId, userId));
      setIsApplied(!isApplied);
    };

    handlers.handleChangeApplyRecruitingButton = handleChangeApplyRecruitingButton;
  }

  return [postData, isUserPublisher, handlers];
};

export default usePostDetail;
