/* eslint-disable indent */
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { UserInformation, PostHeading, RoundedBox, Button } from 'components';
import { removeRegularPostAsync } from 'redux/modules/regularPost';
import { filterData } from 'utils';

import {
  imageContainer,
  publisherInformationContainer,
  headingContainer,
  text,
} from './RegularPostDetail.module.scss';

const RegularPost = () => {
  const history = useHistory();
  const params = useParams();

  const userId = useSelector(state => state.auth.userInfo._id);
  const regularPostsData = useSelector(state => state.regularPost);
  const dispatch = useDispatch();

  const postId = params.postId;
  const userName = params.userName;
  const mountainName = params.mountainName;

  const handleClickRemovePost = async () => {
    await dispatch(removeRegularPostAsync(postId));

    const path = userName
      ? `/profile/${userName}/reviews`
      : mountainName
      ? `/${mountainName}/reviews`
      : `/reviews`;
    history.push(path);
  };
  const handleClickEditPost = () => {
    const path = userName
      ? `/profile/${userName}/reviews/edit/${postId}`
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
        <UserInformation
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

export default RegularPost;
