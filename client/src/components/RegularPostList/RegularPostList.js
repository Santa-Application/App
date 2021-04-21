import { RegularPostCard } from 'components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  reviewPostListContainer,
  reviewPostCard,
} from './RegularPostList.module.scss';

const RegularPostList = ({ postsData, className, ...restProps }) => {
  const regularPostListContainerClasses = classNames(
    className.container,
    reviewPostListContainer
  );

  return (
    <ul className={regularPostListContainerClasses}>
      {postsData.map(post => (
        <li key={post._id}>
          <a href="/">
            <RegularPostCard
              postData={post}
              className={{ container: reviewPostCard }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

RegularPostList.defaultProps = {
  className: '',
};

RegularPostList.propTypes = {
  className: PropTypes.string,
};

export default RegularPostList;
