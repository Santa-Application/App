/* eslint-disable indent */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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

const RecruitPost = ({ match, ...restProps }) => {
  const state = useSelector(state => state);
  const { isLoading, data, error } = state.recruitPost;
  const dispatch = useDispatch();

  const [isApplied, setIsApplied] = useState(false);

  // const signedIn = state.auth.signedIn;
  // const applicantId = state.auth.userInfo._id;
  const postId = match.params.postId;

  const handleClickRemovePost = () => {
    dispatch(removeRecruitPostAsync(postId));
  };
  const handleChangeApplyRecruitingButton = () => {
    // dispatch(toggleApplyRecruiting(postId, applicantId));
    setIsApplied(!isApplied);
  };

  useEffect(() => {
    dispatch(getRecruitPostsAsync());
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

  const postData = data.find(_data => _data.recruitPost._id === postId);
  const { recruitPost } = postData;

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
        {/* {signedIn ? (
          <>
            <Button secondary onClick={handleClickRemovePost}>
              삭제하기
            </Button>
            <Link to={`/recruit/edit/${applicantId}`}>수정하기</Link>
          </>
        ) : (
          <Button
            type="button"
            secondary={isApplied}
            onClick={handleChangeApplyRecruitingButton}
          >
            {isApplied ? '메이트 취소' : '메이트 신청'}
          </Button>
        )} */}
        <Button
          type="button"
          secondary={isApplied}
          onClick={handleChangeApplyRecruitingButton}
        >
          {isApplied ? '메이트 취소' : '메이트 신청'}
        </Button>
      </div>
    </div>
  );
};

// RecruitPost.defaultProps = {};

// RecruitPost.propTypes = {};

export default RecruitPost;
