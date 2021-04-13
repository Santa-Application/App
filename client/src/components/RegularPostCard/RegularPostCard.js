import classNames from 'classnames';
import PropTypes from 'prop-types';
import { container } from './RegularPostCard.module.scss';

const RegularPostCard = ({
  src,
  postTitle,
  postDate,
  postDateInKorean,
  mountain,
  containerClassName,
  ...restProps
}) => {
  const containerClasses = classNames(containerClassName, container);

  return (
    <div className={containerClasses}>
      <img src={src} alt="" />
      <div>
        <p>{postTitle}</p>
        <time dateTime={postDate}>{postDateInKorean}</time>
        <span>{mountain}</span>
      </div>
    </div>
  );
};

RegularPostCard.defaultProps = {
  src: '',
  postTitle: '',
  postDate: '',
  postDateInKorean: '',
  mountain: '',
};
RegularPostCard.propTypes = {
  src: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDate: PropTypes.string,
  postDateInKorean: PropTypes.string.isRequired,
  mountain: PropTypes.string.isRequired,
};

export default RegularPostCard;
