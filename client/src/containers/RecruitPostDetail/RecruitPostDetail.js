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
import { PageNotFound } from 'pages';

const RecruitPost = ({ match, history, ...restProps }) => {
  const userId = useSelector(state => state.auth.userInfo._id);
  const recruitPostsData = useSelector(state => state.recruitPost);
  const { isLoading, data, error } = recruitPostsData;
  const dispatch = useDispatch();

  const [isApplied, setIsApplied] = useState(false);

  const postId = match.params.postId;

  const handleClickRemovePost = () => {
    // dispatch(removeRecruitPostAsync(postId));
    history.push('/recruit');
  };
  const handleClickEditPost = () => {
    history.push(`/recruit/edit/${postId}`);
  };
  const handleChangeApplyRecruitingButton = () => {
    // dispatch(toggleApplyRecruiting(postId, userId));
    setIsApplied(!isApplied);
  };

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

  const postData = data.find(_data => _data.recruitPost._id === postId);
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
