import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RecruitPostCard } from 'components';
import { getRecruitPostsAsync } from 'redux/modules/recruitPost';

import PropTypes from 'prop-types';
import { recruitPostCard } from './RecruitPostList.module.scss';

const RecruitPostList = ({ className, ...restProps }) => {
  const state = useSelector(state => state.recruitPost);
  const { isLoading, data, error } = state;
  const dispatch = useDispatch();

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

  const postsData = state.data;

  return (
    <>
      <Link
        to="/recruit/create"
        style={{
          color: '#666',
          fontSize: '1.4rem',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '1.5em',
          marginRight: '1em',
        }}
      >
        작성하기
      </Link>
      <ul>
        {postsData.map(post => {
          return (
            <li key={post.recruitPost._id}>
              <Link to={`/recruit/${post.recruitPost._id}`}>
                <RecruitPostCard
                  postData={post}
                  className={{ container: recruitPostCard }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

RecruitPostList.defaultProps = {
  className: '',
};

RecruitPostList.propTypes = {
  className: PropTypes.string,
};

export default RecruitPostList;
