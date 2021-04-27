import {
  ProfileInformation,
  ProfileImage,
  Heading,
  Button,
  Icon,
} from 'components';
import { string, number, oneOf } from 'prop-types';
import {
  profileInfoCard,
  header,
  summary,
  editButton,
  introduce,
} from './ProfileInfoCard.module.scss';

const ProfileInfoCard = ({
  name,
  imageURL,
  gender,
  age,
  level,
  introduction,
  onClick,
}) => {
  return (
    <div className={profileInfoCard}>
      <ProfileImage src={imageURL} size="large" />
      <div className={header}>
        <Heading level={3} content={name} />
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
        <ProfileInformation type="나이" options={age} />
        <ProfileInformation type="레벨" options={level} />
      </div>
    </div>
  );
};

export default ProfileInfoCard;

ProfileInfoCard.defaultProps = {
  name: 'UserID',
  imageURL:
    'https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20052500028.jpg',
  gender: 'female',
  age: 32,
  level: 'level2',
  introduction: 'User introduction placed in this place',
};

ProfileInfoCard.propTypes = {
  name: string.isRequired,
  imageURL: string.isRequired,
  gender: oneOf(['female', 'male']).isRequired,
  age: number.isRequired,
  level: oneOf(['level1', 'level2', 'level3']).isRequired,
  introduction: string.isRequired,
};
