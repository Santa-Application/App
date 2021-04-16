import { Heading } from 'components';
import { postDate } from 'utils';
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

  const containerClasses = classNames(className.container, container);
  const titleClasses = classNames(className.title, title);

  return (
    <div className={containerClasses}>
      <Heading level={2} className={titleClasses}>
        {postTitle}
      </Heading>
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
  className: '',
};

PostHeading.propTypes = {
  postData: PropTypes.shape({
    postTitle: PropTypes.string,
    postingDate: PropTypes.object,
    views: PropTypes.number,
  }).isRequired,
  className: PropTypes.string,
};

export default PostHeading;
