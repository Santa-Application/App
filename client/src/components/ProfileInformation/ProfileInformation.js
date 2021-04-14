import { Icon } from 'components';
import { string, number, oneOf, oneOfType } from 'prop-types';
import { information } from './ProfileInformation.module.scss';


const ProfileInformation = ({ type, options }) => {

  return (
    <div className={information}>
      { 
        type === '나이' ? 
          <span>{options}</span> : <Icon shape={options} />
      }
      <p>{type}</p>
    </div>
  );
};

export default ProfileInformation;

ProfileInformation.propTypes = {
  type: oneOf(['나이', '성별', '레벨']),
  options: oneOfType([string, number])
};

ProfileInformation.defaultProps = {
  type: '나이',
  options: 27
};
