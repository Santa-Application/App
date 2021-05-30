/* eslint-disable indent */
import { Link } from 'react-router-dom';

import { CreatePostButton, RecruitPostCard } from 'components';
import { pathUtils } from 'utils';
import { usePostList } from 'hooks';

import PropTypes from 'prop-types';
import { listContainer, postCard } from './RecruitPostList.module.scss';

const RecruitPostList = ({ pageInfo }) => {
  const postsData = usePostList(pageInfo);

  return (
    <>
      {pageInfo.isPossibleToWrite && <CreatePostButton pageInfo={pageInfo} />}
      <ul className={listContainer}>
        {postsData.map(post => {
          const postId = post.recruitPost._id;

          return (
            <li key={postId}>
              <Link to={pathUtils.createDetailPagePath(pageInfo, postId)}>
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
    isPossibleToWrite: true,
  },
};

RecruitPostList.propTypes = {
  pageInfo: PropTypes.object,
};

export default RecruitPostList;
