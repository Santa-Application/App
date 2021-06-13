import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {
  removeRecruitPostAsync,
  toggleApplyRecruitingAsync,
} from 'redux/modules/recruitPost';
import { removeRegularPostAsync } from 'redux/modules/regularPost';
import { moveToFormPagePath, replaceToListPage } from 'utils/pathUtils';

const removeHandler = {
  recruit: removeRecruitPostAsync,
  regular: removeRegularPostAsync,
};

const useCreateHandlers = (pageInfo, isApplied, setIsApplied) => {
  const postType = pageInfo.postType;

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const postId = params.postId;
  const userId = useSelector(state => state.auth.userInfo._id);

  const handleClickEditPost = useCallback(() => {
    moveToFormPagePath(history, pageInfo, postId, 'edit');
  }, [pageInfo, postId, history]);

  const handleClickRemovePost = useCallback(async () => {
    const removePostAsync = removeHandler[postType];
    replaceToListPage(history, pageInfo);
    await dispatch(removePostAsync(postId));
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

  return handlers;
};

export default useCreateHandlers;
