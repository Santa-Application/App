import { Heading, ProfileImage, Tag } from 'components';
import { postDate } from 'utils';
import PropTypes from 'prop-types';
import {
  container,
  title,
  postInfo,
  tagList,
} from './RecruitPostCard.module.scss';

const RecruitPostCard = ({
  src,
  postTitle,
  mountainName,
  postDate: postingDate,
  person,
  gender,
  ...restProps
}) => {
  const { year, month, date } = postDate.getPostDateObject(postingDate);

  return (
    <div className={container} {...restProps}>
      <ProfileImage src={src} size="medium" />
      <div className={postInfo}>
        <Heading level={3} className={title}>
          {postTitle}
        </Heading>
        <div className={tagList}>
          <Tag
            type="mountain"
            contents={{
              mountainName,
            }}
          />
          <Tag
            type="date"
            contents={{
              year,
              month,
              date,
            }}
          />
          <Tag
            type="person"
            contents={{
              person,
            }}
          />
          <Tag
            type="gender"
            contents={{
              gender,
            }}
          />
        </div>
      </div>
    </div>
  );
};

RecruitPostCard.defaultProps = {
  src: '',
  postTitle: '',
  mountainName: '',
  postDate: null,
  person: 1,
  gender: 'genderBoth',
};

RecruitPostCard.propTypes = {
  src: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  mountainName: PropTypes.string.isRequired,
  postDate: PropTypes.object.isRequired,
  person: PropTypes.number.isRequired,
  gender: PropTypes.oneOf(['female', 'male', 'genderBoth']).isRequired,
};

export default RecruitPostCard;
