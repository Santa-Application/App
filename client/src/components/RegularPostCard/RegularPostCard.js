import { Heading, Tag } from 'components';
import { postDate } from 'utils';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  container,
  image,
  textContainer,
  title,
  time,
} from './RegularPostCard.module.scss';

const RegularPostCard = ({
  src,
  postTitle,
  postDate: postingDate,
  mountainName,
  className,
  ...restProps
}) => {
  const containerClasses = classNames(className.container, container);

  return (
    <div className={containerClasses}>
      <img src={src} alt="" className={image} />
      <div className={textContainer}>
        <Heading level={3} className={title}>
          {postTitle}
        </Heading>
        <time dateTime={postDate.getPostDate(postingDate)} className={time}>
          {postDate.getPostDateInKorean(postingDate)}
        </time>
        <Tag
          type="mountain"
          contents={{
            mountainName,
          }}
        ></Tag>
      </div>
    </div>
  );
};

RegularPostCard.defaultProps = {
  src: '',
  postTitle: '',
  postDate: null,
  mountainName: '',
  className: {},
};

RegularPostCard.propTypes = {
  src: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDate: PropTypes.object.isRequired,
  mountainName: PropTypes.string.isRequired,
  className: PropTypes.object,
};

export default RegularPostCard;
