import { useEffect } from 'react';
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
  container,
  imageContainer,
  publisherInformationContainer,
  headingContainer,
  text,
  buttonContainer,
} from './RegularPostDetail.module.scss';
import {
  getRegularPostsAsync,
  removeRegularPostAsync,
} from 'redux/modules/regularPost';
import { filterData } from 'utils';

const RegularPost = ({ match, history, ...restProps }) => {
  const auth = useSelector(state => state.auth);
  const regularPostsData = useSelector(state => state.regularPost);
  const { isLoading, data, error } = regularPostsData;
  const dispatch = useDispatch();

  // const signedIn = auth.signedIn;
  // const userId = auth.userInfo._id;
  const postId = match.params.postId;

  const handleClickRemovePost = () => {
    dispatch(removeRegularPostAsync(postId));
    history.push('/reviews');
  };
  const handleClickEditPost = () => {
    history.push(`/reviews/edit/${postId}`);
  };

  useEffect(() => {
    dispatch(getRegularPostsAsync());
  }, []);

  if (isLoading)
    return (
      <div
        style={{
          color: '#666',
          fontSize: '2rem',
          margin: '5rem',
          marginBottom: '25rem',
        }}
      >
        로딩중임돠
      </div>
    );
  if (error)
    return (
      <div
        style={{
          color: '#666',
          fontSize: '2rem',
          margin: '5rem',
          marginBottom: '25rem',
        }}
      >
        에러났음돠
      </div>
    );
  if (!data)
    return (
      <div
        style={{
          color: '#666',
          fontSize: '2rem',
          margin: '5rem',
          marginBottom: '25rem',
        }}
      >
        데이터가 없음돠
      </div>
    );

  const postData = data.find(_data => _data.regularPost_id === postId);
  // const { regularPost } = postData;

  return (
    <div className={container}>
      {/* <div className={imageContainer}>
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
      <p className={text}>{regularPost.content}</p> */}
      {/* {signedIn && (
        <div className={buttonContainer}>
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
      )} */}
      <div className={buttonContainer}>
        <Button type="button" secondary={true} onClick={handleClickRemovePost}>
          삭제하기
        </Button>
        <Button type="button" onClick={handleClickEditPost}>
          수정하기
        </Button>
      </div>
    </div>
  );
};

RegularPost.defaultProps = {};

RegularPost.propTypes = {};

export default RegularPost;
