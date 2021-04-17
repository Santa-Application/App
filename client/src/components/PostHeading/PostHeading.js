import { Heading } from 'components';
import { postDate, propTypeInterface } from 'utils';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  container,
  title,
  infoContainer,
  date,
  views,
} from './PostHeading.module.scss';

const PostHeading = ({ postData, className, ...restProps }) => {
  const { postTitle, postingDate, views: postingViews } = postData;

  const containerClasses = classNames(className.headingContainer, container);
  const titleClasses = classNames(className.title, title);

  return (
    <div className={containerClasses}>
      <Heading level={2} className={titleClasses} content={postTitle}></Heading>
      <div className={infoContainer}>
        <time dateTime={postDate.getPostDate(postingDate)} className={date}>
          {postDate.getPostDateInKorean(postingDate)}
        </time>
        <p className={views}>조회수 {postingViews}</p>
      </div>
    </div>
  );
};

PostHeading.defaultProps = {
  postData: {
    postTitle: '',
    postingDate: {},
    views: 0,
  },
  className: {},
};

PostHeading.propTypes = {
  postData: PropTypes.exact(propTypeInterface.postHeadingData).isRequired,
  className: PropTypes.object,
};

export default PostHeading;
