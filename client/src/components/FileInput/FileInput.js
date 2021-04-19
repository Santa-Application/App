import React from 'react';
import classNames from 'classnames';
import PropTypes, { string } from 'prop-types';
import { fileInput } from './FileInput.module.scss';

const FileInput = ({
  id,
  label,
  className,
  name,
  fileRoute,
  handleGetFileRoute,
}) => {
  const FileInputClasses = classNames(className, fileInput);

  // const [fileRoute, setFileRoute] = React.useState('');

  // const handleGetFileRoute = e => {
  //   setFileRoute(e.target.value);
  // };

  return (
    <div className={FileInputClasses}>
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          type="file"
          min="1"
          accept=".gif, .jpg, .png"
          name={name}
          onChange={handleGetFileRoute}
        />
      </label>
      <span children={fileRoute}></span>
    </div>
  );
};

FileInput.defaultProps = {
  id: '',
  label: '',
  className: '',
  name: '',
  fileRoute: '',
  handleGetFileRoute: null,
};

FileInput.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  className: string,
  name: string,
  fileRoute: string,
  handleGetFileRoute: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
};

export default FileInput;
