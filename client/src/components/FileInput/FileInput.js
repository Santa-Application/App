import React from 'react';
import classNames from 'classnames';
import PropTypes, { string } from 'prop-types';
import { fileInput } from './FileInput.module.scss';

const FileInput = ({ field, inputProps, form }) => {
  const { id, label, className, fileRoute, onChange } = inputProps;
  const FileInputClasses = classNames(className, fileInput);
  const handleChange = e => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      form.setFieldValue(field.name, file, false);
    };
  };

  return (
    <div className={FileInputClasses}>
      <label htmlFor={id}>
        {label /* '파일 선택'*/}
        <input
          id={id}
          type="file"
          min="1"
          accept=".gif, .jpg, .png"
          onChange={e => handleChange(e)}
        />
      </label>
      <span children={fileRoute}></span>
    </div>
  );
};

FileInput.defaultProps = {
  inputProps: {
    id: '',
    label: '',
    fileRoute: '',
    onChange: null,
  },
};

FileInput.propTypes = {
  inputProps: PropTypes.shape({
    /** 식별 가능한 id값을 필수로 전달합니다. */
    id: string.isRequired,
    /** 사용자에게 정보를 제공할 레이블 설정은 필수로 전달합니다. 화면에 표시되지 않더라도 스크린 리더 사용자에게 정보를 제공합니다. */
    label: string.isRequired,
    /** 폼 컨트롤 시, 사용자가 입력한 값과 매칭되는 네임 값을 설정합니다. */
    className: string,
    /** 파일의 경로가 표시되는 문자열 상태를 전달받습니다. */
    fileRoute: string,
    /** 폼 컨트롤의 값이 변경될 때 실행될 이벤트(함수)를 전달받습니다. (fileRoute의 상태를 업데이트합니다.) */
    onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  }),
};

export default FileInput;
