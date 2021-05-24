/* eslint-disable indent */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RecruitPostCard } from 'components';
import { getRecruitPostsAsync } from 'redux/modules/recruitPost';
import { path } from 'utils';

import PropTypes from 'prop-types';
import { listContainer, postCard } from './RecruitPostList.module.scss';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';

const RecruitPostList = ({ pageInfo }) => {
  const state = useSelector(state => state.recruitPost);
  const { isLoading, data, error } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecruitPostsAsync());
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

  const postsData =
    pageInfo.type === 'profile'
      ? data.filter(_data => _data.publisherInfo.name === pageInfo.params)
      : pageInfo.type === 'mountains'
      ? data.filter(_data => _data.recruitPost.mountainName === pageInfo.params)
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
      <ul className={listContainer}>
        {postsData.map(post => {
          const postId = post.recruitPost._id;

          return (
            <li key={postId}>
              <Link to={path.createDetailPagePath(pageInfo, postId)}>
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
    postType: 'recruit',
    isLoggedInUserPage: true,
  },
};

RecruitPostList.propTypes = {
  pageInfo: PropTypes.object,
};

export default RecruitPostList;
