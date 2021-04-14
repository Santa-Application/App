import PropTypes from 'prop-types';

const Heading = ({ level, children, className, ...restProps }) => {
  const Heading = `h${level}`;

  return (
    <Heading className={className} {...restProps}>
      {children}
    </Heading>
  );
};

Heading.defaultProps = {
  level: 2,
  children: '',
  className: '',
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Heading;
