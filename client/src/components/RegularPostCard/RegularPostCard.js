import { Heading, Tag } from 'components';
import { postDate as changePostDate, propTypeSchema } from 'utils';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  container,
  imageContainer,
  image,
  textContainer,
  title as titleStyle,
  time,
} from './RegularPostCard.module.scss';

const RegularPostCard = ({ postData, className, ...restProps }) => {
  
  const { title, postDate, imageURL, mountainName } = postData;
  const containerClasses = className?.container ? classNames(className.container, container) : container;

  return (
    <div className={containerClasses}>
      <div className={imageContainer}>
        <img src={imageURL} alt="" className={image} />
      </div>
      <div className={textContainer}>
        <Heading level={3} className={titleStyle} content={title}></Heading>
        <time dateTime={changePostDate.dateTime(postDate)} className={time}>
          {changePostDate.dateInKorean(postDate)}
        </time>
        <Tag type="mountain" content={mountainName}></Tag>
      </div>
    </div>
  );
};

// RegularPostCard.defaultProps = {
//   postData: {
//     title: '',
//     imageURL: '',
//     mountainName: '',
//     postingDate: {},
//   },
//   className: {},
// };

// RegularPostCard.propTypes = {
//   postData: PropTypes.exact(propTypeSchema.regularPostCard).isRequired,
//   className: PropTypes.object,
// };

export default RegularPostCard;
