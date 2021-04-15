import { Heading, ProfileImage, Tag } from 'components';
import { postDate, propTypeInterface } from 'utils';
import PropTypes from 'prop-types';
import {
  container,
  title,
  postInfo,
  tagList,
} from './RecruitPostCard.module.scss';

const RecruitPostCard = ({ publisherImageUrl, postData, ...restProps }) => {
  const {
    postTitle,
    recruitingDate,
    mountainName,
    recruitingNumber: person,
    recruitingGender: gender,
  } = postData;
  const { year, month, date } = postDate.getPostDateObject(recruitingDate);

  return (
    <div className={container} {...restProps}>
      <ProfileImage src={publisherImageUrl} size="medium" />
      <div className={postInfo}>
        <Heading level={3} className={title}>
          {postTitle}
        </Heading>
        <div className={tagList}>
          <Tag type="mountain" contents={{ mountainName }} />
          <Tag
            type="date"
            contents={{
              year,
              month,
              date,
            }}
          />
          <Tag type="person" contents={{ person }} />
          <Tag type="gender" contents={{ gender }} />
        </div>
      </div>
    </div>
  );
};

RecruitPostCard.defaultProps = {
  publisherImageUrl: '',
  postData: {
    postTitle: '',
    mountainName: '',
    recruitingDate: {},
    recruitingNumber: 0,
    recruitingGender: '상관없음',
  },
};

RecruitPostCard.propTypes = {
  publisherImageUrl: PropTypes.string.isRequired,
  postData: PropTypes.shape(propTypeInterface.recruitPostCardData).isRequired,
};

export default RecruitPostCard;
