import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RegularPostCard } from 'components';
import { getRegularPostsAsync } from 'redux/modules/regularPost';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  reviewPostListContainer,
  reviewPostCard,
} from './RegularPostList.module.scss';

const RegularPostList = ({ className, ...restProps }) => {
  const state = useSelector(state => state.regularPost);
  const { isLoading, data, error } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegularPostsAsync());
  }, []);

  const regularPostListContainerClasses = classNames(
    className.container,
    reviewPostListContainer
  );

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
        to="/review/create"
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
      <ul className={regularPostListContainerClasses}>
        {data.map(post => (
          <li key={post.regularPost._id}>
            <Link to={`/reviews/${post.regularPost._id}`}>
              <RegularPostCard
                postData={post.regularPost}
                className={{ container: reviewPostCard }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

RegularPostList.defaultProps = {
  className: '',
};

RegularPostList.propTypes = {
  className: PropTypes.string,
};

export default RegularPostList;
