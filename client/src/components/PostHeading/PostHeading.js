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
  const containerClasses = classNames(className.container, container);
  const titleClasses = classNames(className.title, title);

  return (
    <div className={containerClasses}>
      <Heading level={2} className={titleClasses}>
        {postData.title}
      </Heading>
      <div className={infoContainer}>
        <time dateTime={postDate.getPostDate(postData.date)} className={date}>
          {postDate.getPostDateInKorean(postData.date)}
        </time>
        <p className={views}>조회수 {postData.views}</p>
      </div>
    </div>
  );
};

PostHeading.defaultProps = {
  postData: {},
  className: '',
};

PostHeading.propTypes = {
  postData: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default PostHeading;
