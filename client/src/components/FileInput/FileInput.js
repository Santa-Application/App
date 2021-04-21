import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import PropTypes, { string } from 'prop-types';
import { fileInput } from './FileInput.module.scss';

const FileInput = ({ field, ...inputProps }) => {
  const { id, label, className, fileRoute, setFieldValue } = inputProps;
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

  // const uploadImage = async imageFile => {
  //   const imageUrlData = new FormData();
  //   imageUrlData.append(imageFile);
  //   try {
  //     const response = await axios.post('', imageUrlData, {
  //       headers: {
  //         'Content-type': 'multipart/form-data',
  //       },
  //     });

  //     return response.data;
  //   } catch (e) {
  //     throw Error(e);
  //   }
  // };

  // const handleChangeFileInput = async e => {
  //   const imagePath = await uploadImage(e.target.file[0]);
  //   setFieldValue(imagePath);
  // };

  return (
    <div className={FileInputClasses}>
      <label htmlFor={id}>
        {label /* '파일 선택'*/}
        <input
          id={id}
          type="file"
          min="1"
          accept=".gif, .jpg, .png"
          {...field}
          // onChange={handleChangeFileInput}
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
