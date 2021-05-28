/* eslint-disable indent */
import { Link } from 'react-router-dom';

import { RegularPostCard, CreatePostButton } from 'components';
import { pathUtils } from 'utils';
import { usePostList } from 'Hooks';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { listContainer, postCard } from './RegularPostList.module.scss';

const RegularPostList = ({ pageInfo, className }) => {
  const listContainerClasses = classNames(className.container, listContainer);
  const postsData = usePostList(pageInfo);

  return (
    <>
      {pageInfo.isPossibleToWrite && <CreatePostButton pageInfo={pageInfo} />}
      <ul className={listContainerClasses}>
        {postsData.map(post => {
          const postId = post.regularPost._id;

          return (
            <li key={postId}>
              <Link to={pathUtils.createDetailPagePath(pageInfo, postId)}>
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
    postType: 'regular',
    isPossibleToWrite: true,
  },
  className: {},
};

RegularPostList.propTypes = {
  pageInfo: PropTypes.object,
  className: PropTypes.object,
};

export default RegularPostList;
