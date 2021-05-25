/* eslint-disable indent */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CreatePostButton, Error, RecruitPostCard } from 'components';
import { getRecruitPostsAsync } from 'redux/modules/recruitPost';
import { filterData, path } from 'utils';

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
    if (error) return <Error />;
  }, [isLoading, error]);

  const postsData = filterData.postsData(data, pageInfo);

  return (
    <>
      {pageInfo.isLoggedInUserPage && <CreatePostButton pageInfo={pageInfo} />}
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
