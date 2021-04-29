import { useLocation } from 'react-router-dom';

import { Heading, Tag } from 'components';
import { postDate as changePostDate, propTypeSchema } from 'utils';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  container,
  containerMain,
  image,
  textContainer,
  title as titleStyle,
  time,
} from './RegularPostCard.module.scss';

const RegularPostCard = ({ postData }) => {
  const { title, postDate, imageURL, mountainName } = postData;
  const containerClasses = classNames(
    useLocation().pathname === '/main' ? containerMain : container
  );

  return (
    <div className={containerClasses}>
      <div>
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

RegularPostCard.defaultProps = {
  postData: {
    regularPost: {
      title: '',
      imageURL: '',
      mountainName: '',
      postDate: '',
    },
  },
  className: {},
};

RegularPostCard.propTypes = {
  postData: PropTypes.shape(propTypeSchema.regularPostCard).isRequired,
  className: PropTypes.object,
};

export default RegularPostCard;
