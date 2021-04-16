import { Checkbox } from 'components';
import PropTypes from 'prop-types';

const LikeButton = ({ id, checked, onChange, ...restProps }) => {
  return (
    <Checkbox
      id={id}
      name="likes"
      checkboxIcon={checked ? 'likeTrue' : 'likeFalse'}
      checked={checked}
      onChange={onChange}
    />
  );
};

LikeButton.defaultProps = {
  id: '',
  checked: false,
  onChange: null,
};

LikeButton.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
    .isRequired,
};

export default LikeButton;
