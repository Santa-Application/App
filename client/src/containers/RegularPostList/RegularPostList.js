import { RegularPostCard } from 'components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  reviewPostListContainer,
  reviewPostCard,
} from './RegularPostList.module.scss';

// mock data
import { regularPostData } from '../../mock';
const regularPostListData = regularPostData.map(
  ({ imageUrl, postTitle, postingDate, mountainName }) => ({
    postTitle,
    imageUrl,
    postingDate,
    mountainName,
  })
);

// component
const RegularPostList = ({ className, ...restProps }) => {
  const regularPostListContainerClasses = classNames(
    className.container,
    reviewPostListContainer
  );

  return (
    <ul className={regularPostListContainerClasses}>
      {regularPostListData.map(postData => (
        <RegularPostCard
          postData={postData}
          className={{ container: reviewPostCard }}
        />
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
