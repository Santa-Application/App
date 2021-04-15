import { Checkbox } from 'components';
import PropTypes from 'prop-types';

const LikeButton = ({ id, isChecked, onChange, ...restProps }) => {
  return (
    <Checkbox
      id={id}
      name="likes"
      checkboxIcon={isChecked ? 'likeTrue' : 'likeFalse'}
      checked={isChecked}
      onChange={onChange}
    />
  );
};

LikeButton.defaultProps = {
  id: '',
  isChecked: false,
  onChange: null,
};

LikeButton.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
};

export default LikeButton;
