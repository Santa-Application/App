import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { UserInformation, PostHeading, RoundedBox, Button } from 'components';
import { removeRegularPostAsync } from 'redux/modules/regularPost';
import { dataFilteringUtils, path } from 'utils';

import PropTypes from 'prop-types';
import {
  imageContainer,
  publisherInformationContainer,
  headingContainer,
  text,
} from './RegularPostDetail.module.scss';
import usePostDetail from 'Hooks/usePostDetail';

const RegularPostDetail = ({ pageInfo }) => {
  // const history = useHistory();
  // const params = useParams();

  // const userId = useSelector(state => state.auth.userInfo._id);
  // const regularPostsData = useSelector(state => state.regularPost);
  // const dispatch = useDispatch();

  // const postId = useMemo(() => params.postId);

  // const postData = regularPostsData.data.find(
  //   _data => _data.regularPost._id === postId
  // );
  // const publisherId = useMemo(() => postData.publisherInfo._id);
  // const isUserPublisher = useMemo(() => publisherId === userId);

  const [postData, isUserPublisher, handlers] = usePostDetail(pageInfo);
  const { regularPost } = postData;
  const { handleClickEditPost, handleClickRemovePost } = handlers;

  // const handleClickEditPost = () => {
  //   history.push(path.createFormPagePath(pageInfo, 'edit', postId));
  // };

  return (
    <div>
      <div className={imageContainer}>
        <img src={regularPost.imageURL} alt="" />
      </div>
      <div className={publisherInformationContainer}>
        <UserInformation
          userData={dataFilteringUtils.filterPostUserInfoData(postData)}
        />
        <RoundedBox>{regularPost.mountainName}</RoundedBox>
      </div>
      <PostHeading
        postData={dataFilteringUtils.filterPostHeadingData(regularPost)}
        className={{ headingContainer }}
      />
      <p className={text}>{regularPost.content}</p>
      {isUserPublisher && (
        <div className="buttonContainer">
          <Button type="button" secondary onClick={handleClickRemovePost}>
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
