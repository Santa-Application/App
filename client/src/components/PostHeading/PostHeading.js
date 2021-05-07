import { Heading } from 'components';
import { postDate as postDateUtil, propTypeSchema } from 'utils';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { container, title, infoContainer } from './PostHeading.module.scss';

const PostHeading = ({ postData, className }) => {
  const { title: postTitle, postDate, views: postingViews } = postData;

  const containerClasses = classNames(className.headingContainer, container);
  const titleClasses = classNames(className.title, title);

  return (
    <div className={containerClasses}>
      <Heading level={3} className={titleClasses} content={postTitle}></Heading>
      <div className={infoContainer}>
        <time dateTime={postDateUtil.getPostDate(new Date(postDate))}>
          {postDateUtil.getPostDateInKorean(new Date(postDate))}
        </time>
        <p>조회수 {postingViews}</p>
      </div>
    </div>
  );
};

PostHeading.defaultProps = {
  postData: {
    title: '',
    postDate: '',
    views: 0,
  },
  className: {},
};

PostHeading.propTypes = {
  postData: PropTypes.shape(propTypeSchema.postHeadingData).isRequired,
  className: PropTypes.object,
};

export default PostHeading;
