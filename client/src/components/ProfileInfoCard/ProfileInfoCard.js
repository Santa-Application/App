import {
  ProfileInformation,
  ProfileImage,
  Heading,
  Button,
  Icon,
} from 'components';
import {
  profileInfoCard,
  header,
  summary,
  editButton,
  introduce,
} from './ProfileInfoCard.module.scss';
import { string, number, oneOf } from 'prop-types';
import { postDate } from 'utils';
import { Link } from 'react-router-dom';

const ProfileInfoCard = ({
  name,
  profileImageURL,
  gender,
  age,
  level,
  introduction,
  onClick,
}) => {
  return (
    <div className={profileInfoCard}>
      <ProfileImage src={profileImageURL} size="large" />
      <div className={header}>
        <Link
          to={`/${name}/recruit`}
          component={() => <Heading level={3} content={name} />}
        />
        <Button
          secondary={false}
          type={'button'}
          disabled={false}
          value={'Edit button'}
          className={editButton}
          onClick={onClick}
        >
          <Icon shape={'edit'} />
        </Button>
      </div>
      <p className={introduce}>{introduction}</p>
      <div className={summary}>
        <ProfileInformation type="성별" options={gender} />
        <ProfileInformation
          type="나이"
          options={postDate.getUserAge(new Date(age))}
        />
        <ProfileInformation type="레벨" options={level} />
      </div>
    </div>
  );
};

export default ProfileInfoCard;

ProfileInfoCard.propTypes = {
  name: string.isRequired,
  profileImageURL: string.isRequired,
  gender: oneOf(['female', 'male']).isRequired,
  age: number.isRequired,
  level: oneOf(['level1', 'level2', 'level3']).isRequired,
  introduction: string.isRequired,
};
