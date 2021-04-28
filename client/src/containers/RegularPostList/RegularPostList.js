/* eslint-disable indent */
import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import { RegularPostCard } from 'components';
import { getRegularPostsAsync } from 'redux/modules/regularPost';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { listContainer, postCard } from './RegularPostList.module.scss';

const RegularPostList = ({ pageInfo, className, ...restProps }) => {
  const state = useSelector(state => state.regularPost);
  const { isLoading, data, error } = state;
  const dataData = useSelector(state => state.regularPost.data, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegularPostsAsync());
  }, [dispatch, dataData]);

  const listContainerClasses = classNames(className.container, listContainer);

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
          _data => _data.regularPost.mountainName === pageInfo.mountainName
        )
      : data;
  const createPagePath =
    pageInfo.type === 'profile'
      ? `/profile/${pageInfo.userName}/reviews/create`
      : pageInfo.type === 'mountain'
      ? `/mountains/${pageInfo.mountainName}/reviews/create`
      : '/reviews/create';

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
      <ul className={listContainerClasses}>
        {postsData.map(post => {
          const postId = post.regularPost._id;
          const path =
            pageInfo.type === 'profile'
              ? `/profile/${pageInfo.userName}/reviews/${postId}`
              : pageInfo.type === 'mountain'
              ? `/mountains/${pageInfo.mountainName}/reviews/${postId}`
              : `/reviews/${postId}`;

          return (
            <li key={postId}>
              <Link to={path}>
                <RegularPostCard
                  postData={post.regularPost}
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

RegularPostList.defaultProps = {
  pageInfo: {
    type: '',
    userName: '',
    mountainName: '',
    isLoggedInUser: false,
  },
  className: '',
};

RegularPostList.propTypes = {
  // pageInfo: PropTypes.object,
  // className: PropTypes.object,
};

export default RegularPostList;
