import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { removeRecruitPostAsync } from 'redux/modules/recruitPost';
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

const usePostDetail = pageInfo => {
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

  const handleClickEditPost = () => {
    history.push(createFormPagePath(pageInfo, 'edit', postId));
  };
  const handleClickRemovePost = async () => {
    const removePostAsync = removeHandler[pageInfo.postType];
    await dispatch(removePostAsync(postId));
    history.push(createListPagePath(pageInfo));
  };
  const handlers = {
    handleClickEditPost,
    handleClickRemovePost,
  };

  return [postData, isUserPublisher, handlers];
};

export default usePostDetail;
