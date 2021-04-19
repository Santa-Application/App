import { Checkbox } from 'components';
import PropTypes from 'prop-types';

const LikeButton = ({
  id,
  checked,
  value,
  onChange,
  className,
  ...restProps
}) => {
  return (
    <Checkbox
      id={id}
      name="likes"
      value={value}
      checkboxIcon={checked ? 'likeTrue' : 'likeFalse'}
      checked={checked}
      onChange={onChange}
      className={className}
    />
  );
};

LikeButton.defaultProps = {
  id: '',
  value: '',
  checked: false,
  onChange: null,
  className: {},
};

LikeButton.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
    .isRequired,
  className: PropTypes.object,
};

export default LikeButton;
