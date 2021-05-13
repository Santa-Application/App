/* eslint-disable indent */
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { UserInformation, PostHeading, RoundedBox, Button } from 'components';
import { removeRegularPostAsync } from 'redux/modules/regularPost';
import { filterData, path } from 'utils';

import PropTypes from 'prop-types';
import {
  imageContainer,
  publisherInformationContainer,
  headingContainer,
  text,
} from './RegularPostDetail.module.scss';

const RegularPostDetail = ({ pageInfo }) => {
  const history = useHistory();
  const params = useParams();

  const userId = useSelector(state => state.auth.userInfo._id);
  const regularPostsData = useSelector(state => state.regularPost);
  const dispatch = useDispatch();

  const postId = params.postId;

  const handleClickRemovePost = async () => {
    await dispatch(removeRegularPostAsync(postId));

    history.push(path.createListPagePath(pageInfo));
  };
  const handleClickEditPost = () => {
    history.push(path.createFormPagePath(pageInfo, 'edit', postId));
  };

  const postData = regularPostsData.data.find(
    _data => _data.regularPost._id === postId
  );
  const { regularPost } = postData;
  const publisherId = postData.publisherInfo._id;

  return (
    <div>
      <div className={imageContainer}>
        <img src={regularPost.imageURL} alt="" />
      </div>
      <div className={publisherInformationContainer}>
        <UserInformation userData={filterData.postUserInfo(postData)} />
        <RoundedBox>{regularPost.mountainName}</RoundedBox>
      </div>
      <PostHeading
        postData={filterData.postHeading(regularPost)}
        className={{ headingContainer }}
      />
      <p className={text}>{regularPost.content}</p>
      {publisherId === userId && (
        <div className="buttonContainer">
          <Button
            type="button"
            secondary={true}
            onClick={handleClickRemovePost}
          >
            삭제하기
          </Button>
          <Button type="button" onClick={handleClickEditPost}>
            수정하기
          </Button>
        </div>
      )}
    </div>
  );
};

RegularPostDetail.defaultProps = {
  pageInfo: {
    postType: 'reviews',
  },
};
RegularPostDetail.propTypes = {
  pageInfo: PropTypes.object,
};

export default RegularPostDetail;
