import React from 'react';
import classNames from 'classnames';
import PropTypes, { string } from 'prop-types';
import { fileInput } from './FileInput.module.scss';

const FileInput = ({ id, label, className, fileRoute, onChange }) => {
  const FileInputClasses = classNames(className, fileInput);

  /* ----------------------------------- 
    전달될 상태와 핸들러.
    상위 컴포넌트에서 작성해주세요.

  const [fileRoute, setFileRoute] = React.useState('');

  * onChange
  const handleGetFileRoute = e => {
    setFileRoute(e.target.value);
  };
  --------------------------------------- */

  return (
    <div className={FileInputClasses}>
      <label htmlFor={id}>
        {label /* 파일 선택 */}
        <input
          id={id}
          type="file"
          min="1"
          accept=".gif, .jpg, .png"
          onChange={onChange}
        />
      </label>
      <span children={fileRoute}></span>
    </div>
  );
};

FileInput.defaultProps = {
  id: '',
  label: '',
  fileRoute: '',
  onChange: null,
  className: '',
};

FileInput.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  className: string,
  fileRoute: string,
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
};

export default FileInput;
