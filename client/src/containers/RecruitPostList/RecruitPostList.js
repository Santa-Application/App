/* eslint-disable indent */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RecruitPostCard } from 'components';
import { getRecruitPostsAsync } from 'redux/modules/recruitPost';

import PropTypes from 'prop-types';
import { listContainer, postCard } from './RecruitPostList.module.scss';

const RecruitPostList = ({ pageInfo, className, ...restProps }) => {
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

  const postsData =
    pageInfo.type === 'profile'
      ? data.filter(_data => _data.publisherInfo.name === pageInfo.userName)
      : pageInfo.type === 'mountain'
      ? data.filter(
          _data => _data.recruitPost.mountainName === pageInfo.mountainName
        )
      : data;
  const createPagePath =
    pageInfo.type === 'profile'
      ? `/${pageInfo.userName}/recruit/create`
      : pageInfo.type === 'mountain'
      ? `/${pageInfo.mountainName}/recruit/create`
      : '/recruit/create';

  return (
    <>
      {/* {pageInfo.isLoggedInUser && ( */}
      <Link
        to={createPagePath}
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
      {/* )} */}
      <ul className={listContainer}>
        {postsData.map(post => {
          const postId = post.recruitPost._id;
          const path =
            pageInfo.type === 'profile'
              ? `/${pageInfo.userName}/recruit/${postId}`
              : pageInfo.type === 'mountain'
              ? `/${pageInfo.mountainName}/recruit/${postId}`
              : `/recruit/${postId}`;

          return (
            <li key={postId}>
              <Link to={path}>
                <RecruitPostCard
                  postData={post}
                  className={{ container: postCard }}
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
  pageInfo: {
    type: '',
    userName: '',
    mountainName: '',
    isLoggedInUser: false,
  },
  className: '',
};

// RecruitPostList.propTypes = {
//   className: PropTypes.string,
// };

export default RecruitPostList;
