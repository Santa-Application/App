/* eslint-disable indent */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  PublisherInformation,
  PostHeading,
  RoundedBox,
  StatusOfApplicationBox,
  Button,
} from 'components';
import {
  getRecruitPostsAsync,
  removeRecruitPostAsync,
  toggleApplyRecruiting,
} from 'redux/modules/recruitPost';
import { filterData } from 'utils';

import PropTypes from 'prop-types';
import {
  container,
  headingContainer,
  contentsContainer,
  statusOfRecruitees,
  buttonContainer,
} from './RecruitPostDetail.module.scss';

const RecruitPost = ({ match, history, ...restProps }) => {
  const userInfo = useSelector(state => state.auth.userInfo);
  const recruitPostsData = useSelector(state => state.recruitPost);
  const dispatch = useDispatch();

  const [isApplied, setIsApplied] = useState(false);

  const postId = match.params.postId;
  const userName = match.params.userName;
  const mountainName = match.params.mountainName;

  const handleClickRemovePost = () => {
    dispatch(removeRecruitPostAsync(postId));
    dispatch(getRecruitPostsAsync());

    const path = userName
      ? `/${userName}/recruit`
      : mountainName
      ? `/${mountainName}/recruit`
      : '/recruit';
    history.push(path);
  };
  const handleClickEditPost = () => {
    const path = userName
      ? `/${userName}/recruit/edit/${postId}`
      : mountainName
      ? `/${mountainName}/recruit/edit/${postId}`
      : `/recruit/edit/${postId}`;

    history.push(path);
  };
  const handleChangeApplyRecruitingButton = () => {
    // dispatch(toggleApplyRecruiting(postId, userId));
    setIsApplied(!isApplied);
  };

  if (!userInfo) return <div>접근할 수 없슴돠</div>;

  const userId = userInfo._id;
  const postData = recruitPostsData.data.find(
    _data => _data.recruitPost._id === postId
  );

  console.log(match.params);
  const { recruitPost } = postData;
  const publisherId = postData.publisherInfo._id;

  return (
    <div className={container}>
      <PublisherInformation
        publisherData={filterData.postPublisherInfo(postData)}
      />
      <PostHeading
        postData={filterData.postHeading(recruitPost)}
        className={{ headingContainer }}
      />
      <ul className={contentsContainer}>
        {filterData.recruitPostContents(recruitPost).map((content, index) => {
          return (
            <li key={index}>
              <RoundedBox>{content[1]}</RoundedBox>
            </li>
          );
        })}
      </ul>
      <StatusOfApplicationBox
        recruiteesData={recruitPost.recruitees}
        className={{ container: statusOfRecruitees }}
      />
      <div className={buttonContainer}>
        {publisherId === userId ? (
          <>
            <Button secondary onClick={handleClickRemovePost}>
              삭제하기
            </Button>
            <Button onClick={handleClickEditPost}>수정하기</Button>
          </>
        ) : (
          <Button
            type="button"
            secondary={isApplied}
            onClick={handleChangeApplyRecruitingButton}
          >
            {isApplied ? '메이트 취소' : '메이트 신청'}
          </Button>
        )}
      </div>
    </div>
  );
};

// RecruitPost.defaultProps = {};

// RecruitPost.propTypes = {};

export default RecruitPost;
