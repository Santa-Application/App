import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  removeRecruitPostAsync,
  toggleApplyRecruitingAsync,
} from 'redux/modules/recruitPost';
import { removeRegularPostAsync } from 'redux/modules/regularPost';
import { createFormPagePath, createListPagePath } from 'utils/path';

const postType = {
  recruit: 'recruit',
  reviews: 'regular',
};
const removeHandler = {
  recruit: removeRecruitPostAsync,
  reviews: removeRegularPostAsync,
};

const usePostDetail = (pageInfo, isApplied, setIsApplied) => {
  const post = `${postType[pageInfo.postType]}Post`;

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const postId = params.postId;
  const userId = useSelector(state => state.auth.userInfo._id);
  const postsData = useSelector(state => state[post]);
  const postData = postsData.data.find(data => data[post]._id === postId);
  const publisherId = postData.publisherInfo._id;
  const isUserPublisher = publisherId === userId;

  const handleClickEditPost = useCallback(() => {
    history.push(createFormPagePath(pageInfo, 'edit', postId));
  }, [pageInfo, postId, history]);

  const handleClickRemovePost = useCallback(async () => {
    const removePostAsync = removeHandler[pageInfo.postType];
    await dispatch(removePostAsync(postId));
    history.push(createListPagePath(pageInfo));
  }, [pageInfo, postId, history, dispatch]);

  const handlers = {
    handleClickEditPost,
    handleClickRemovePost,
  };

  if (pageInfo.postType === 'recruit') {
    const handleChangeApplyRecruitingButton = async () => {
      await dispatch(toggleApplyRecruitingAsync(postId, userId));
      setIsApplied(!isApplied);
    };

    handlers.handleChangeApplyRecruitingButton = handleChangeApplyRecruitingButton;
  }

  return [postData, isUserPublisher, handlers];
};

export default usePostDetail;
