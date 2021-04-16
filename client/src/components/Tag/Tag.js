import { Icon } from 'components';
import { string, oneOf } from 'prop-types';
import { tag } from './Tag.module.scss';


const Tag = ({ type, content }) => {
  let shape = '';
  let displayContent = content;

  switch (type) {
    default:
    case 'mountain':
      shape = 'level1';
      break;
    case 'date':
      shape = 'calendar';
      break; 
    case 'person':
      shape = 'member';
      break;
    case 'female':
      shape = 'female';
      break;
    case 'male':
      shape = 'male';
      break;
    case 'genderBoth':
      shape = 'genderBoth';
      break;
  }

  return (
    <div className={tag}>
      <Icon shape={shape} />
      <span>{displayContent}</span>
    </div>
  );
};

export default Tag;

Tag.defaultProps = {
  type: 'mountain',
  content: '한라산'
};

Tag.propTypes = {
  type: oneOf(['mountain', 'date', 'person', 'female', 'male', 'genderBoth']).isRequired,
  content: string.isRequired,
};
