/* eslint-disable indent */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RegularPostCard, LoadingIcon } from 'components';
import { getRegularPostsAsync } from 'redux/modules/regularPost';
import { path } from 'utils';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { listContainer, postCard } from './RegularPostList.module.scss';

const RegularPostList = ({ pageInfo, className }) => {
  const state = useSelector(state => state.regularPost);
  const { isLoading, data, error } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegularPostsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) return <LoadingIcon />;
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
  }, [isLoading, error]);

  const listContainerClasses = classNames(className.container, listContainer);

  const postsData =
    pageInfo.type === 'profile'
      ? data.filter(_data => _data.publisherInfo.name === pageInfo.params)
      : pageInfo.type === 'mountain'
      ? data.filter(_data => _data.regularPost.mountainName === pageInfo.params)
      : data;

  return (
    <>
      {pageInfo.isLoggedInUserPage && (
        <Link
          to={path.createFormPagePath(pageInfo, 'create')}
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
      )}
      <ul className={listContainerClasses}>
        {postsData.map(post => {
          const postId = post.regularPost._id;

          return (
            <li key={postId}>
              <Link to={path.createDetailPagePath(pageInfo, postId)}>
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
    postType: 'reviews',
    isLoggedInUserPage: true,
  },
  className: {},
};

RegularPostList.propTypes = {
  pageInfo: PropTypes.object,
  className: PropTypes.object,
};

export default RegularPostList;
