import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RecruitPostCard } from 'components';
import { getRecruitPostsAsync } from 'redux/modules/recruitPost';

import PropTypes from 'prop-types';
import { listContainer, recruitPostCard } from './RecruitPostList.module.scss';

const RecruitPostList = ({ className, ...restProps }) => {
  const state = useSelector(state => state.recruitPost);
  const { isLoading, data, error } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecruitPostsAsync());
  }, [dispatch]);

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

  return (
    <>
      <Link
        to="/recruit/create"
        style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          float: 'right',
          marginBottom: '1.5em',
          marginRight: '1em',
        }}
      >
        작성하기
      </Link>
      <ul className={listContainer}>
        {data.map(post => {
          // console.log(post.recruitPost._id);
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
