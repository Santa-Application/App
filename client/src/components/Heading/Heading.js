import PropTypes from 'prop-types';

const Heading = ({ level, content, className, ...restProps }) => {
  const Heading = `h${level}`;

  return (
    <Heading className={className} {...restProps}>
      {content}
    </Heading>
  );
};

Heading.defaultProps = {
  level: 2,
  content: '',
  className: '',
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  content: PropTypes.string,
  className: PropTypes.string,
};

export default Heading;
