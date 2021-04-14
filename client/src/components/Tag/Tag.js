import { Icon } from 'components';
import { string, object } from 'prop-types';
import { tag } from './Tag.module.scss';

const Tag = ({ type, contents = { mountainName: '인왕산' } }) => {

  let shape = '';
  let displayContent = '';

  switch (type) {
    default:
    case 'mountain': 
      shape = 'level1';
      displayContent = `${contents.mountainName}`;
      break;
    case 'date': 
      shape = 'calendar';
      displayContent = `${contents.year}년 ${contents.month}월 ${contents.day}일`;
      break;
    case 'person': 
      shape = 'member';
      displayContent = `${contents.person}명`;
      break;
    case 'gender':
      if (contents.gender === 'female') {
        shape = 'female';
        displayContent = '여성';
      } else if (contents.gender === 'male') {
        shape = 'male';
        displayContent = '남성';
      } else {
        shape = 'genderBoth';
        displayContent = '상관없음';
      }
      break;
  }

  return (
    <>
      <Icon className={tag} shape={shape}/>
      <span className={tag}>{displayContent}</span>
    </>
  );
};

export default Tag;

Tag.defaultProps = {
  type: 'mountain',
  contents: {
    mountainName: '인왕산',
    year: 1947,
    month: 6,
    day: 24,
    person: 2,
    gender: 'female'
  }
};

Tag.propTypes = {
  type: string,
  contents: object,
};