/* eslint-disable indent */
import { useSelector, useDispatch } from 'react-redux';

import {
  PublisherInformation,
  PostHeading,
  RoundedBox,
  Button,
} from 'components';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import {
  imageContainer,
  publisherInformationContainer,
  headingContainer,
  text,
} from './RegularPostDetail.module.scss';
import {
  getRegularPostsAsync,
  removeRegularPostAsync,
} from 'redux/modules/regularPost';
import { filterData } from 'utils';

const RegularPost = ({ match, history, ...restProps }) => {
  const userId = useSelector(state => state.auth.userInfo._id);
  const regularPostsData = useSelector(state => state.regularPost);

  const postId = match.params.postId;
  const userName = match.params.userName;
  const mountainName = match.params.mountainName;

  const dispatch = useDispatch();

  const handleClickRemovePost = () => {
    dispatch(removeRegularPostAsync(postId));
    // dispatch(getRegularPostsAsync());

    const path = userName
      ? `/${userName}/reviews`
      : mountainName
      ? `/${mountainName}/reviews`
      : `/reviews`;
    history.push(path);
  };
  const handleClickEditPost = () => {
    const path = userName
      ? `/${userName}/reviews/edit/${postId}`
      : mountainName
      ? `/${mountainName}/reviews/edit/${postId}`
      : `/reviews/edit/${postId}`;

    history.push(path);
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
        <PublisherInformation
          publisherData={filterData.postPublisherInfo(postData)}
        />
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

RegularPost.defaultProps = {};

RegularPost.propTypes = {};

export default RegularPost;
