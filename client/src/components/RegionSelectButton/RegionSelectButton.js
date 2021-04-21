import { RoundedBox, Tag } from 'components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RegionSelectButton = ({ type, content, ...restProps }) => {
  return (
    <RoundedBox>
      <Tag type={type} content={content} />
    </RoundedBox>
  );
};

RegionSelectButton.defaultProps = {
  type: '',
  content: '',
};

RegionSelectButton.propTypes = {
  type: PropTypes.oneOf([
    'seoul',
    'gangwon',
    'chungcheong',
    'gyeongsang',
    'jeolla',
    'jeju',
  ]).isRequired,
  content: PropTypes.oneOf([
    '서울/경기도',
    '강원도',
    '충청도',
    '경상도',
    '전라도',
    '제주도',
  ]).isRequired,
};

export default RegionSelectButton;
