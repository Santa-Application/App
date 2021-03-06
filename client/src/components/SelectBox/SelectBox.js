/* eslint-disable indent */
import React, { useState } from 'react';
import Icon from 'components/Icon/Icon';
import PropTypes, { string, arrayOf, object } from 'prop-types';
import {
  selectBoxContainer,
  selectBoxInput,
  selectBoxList,
} from './SelectBox.module.scss';

const SelectBox = ({ field, inputProps }) => {
  const {
    id,
    placeholder,
    datas,
    setFieldValue,
    handleBlur,
    handleChange,
  } = inputProps;

  const selectBoxClasses = {
    container: selectBoxContainer,
    input: selectBoxInput,
    list: selectBoxList,
  };

  const filtered = datas.filter(({ data }) => {
    return data.name.includes(field.value);
  });

  const [isOpened, setIsOpened] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleFocusInput = e => {
    setIsOpened(true);
  };
  const handleBlurInput = e => {
    handleBlur(e);
    field.value && setIsOpened(false);
  };
  const handleChangeInput = e => {
    handleChange(e);
    setIsOpened(true);
  };
  const handleClickArrow = e => {
    setIsOpened(!isOpened);
  };
  const handleClickItem = e => {
    const selectedItemName = e.target.textContent;
    setIsOpened(false);
    setFieldValue(id, selectedItemName);
    setSelectedItemName(selectedItemName);
  };

  return (
    <div className={selectBoxClasses.container} tabIndex="-1">
      <div className={selectBoxClasses.input}>
        <input
          id={id}
          type="text"
          onFocus={handleFocusInput}
          autoComplete="off"
          placeholder={placeholder}
          {...field}
          onBlur={handleBlurInput}
          onChange={handleChangeInput}
        />
        <button type="button" onClick={handleClickArrow}>
          <Icon shape={isOpened ? 'selectClose' : 'selectOpen'} />
        </button>
      </div>
      {isOpened && (
        <ul
          className={selectBoxClasses.list}
          role="listbox"
          onClick={handleClickItem}
        >
          {filtered.length
            ? filtered.map(({ data }) => {
                return (
                  <li
                    key={data._id}
                    role="option"
                    aria-selected={data.name === selectedItemName}
                  >
                    <button>{data.name}</button>
                  </li>
                );
              })
            : datas.map(({ data }) => {
                return (
                  <li
                    key={data._id}
                    role="option"
                    aria-selected={data.name === selectedItemName}
                  >
                    <button type="button">{data.name}</button>
                  </li>
                );
              })}
        </ul>
      )}
    </div>
  );
};

SelectBox.defaultProps = {
  id: '',
  placeholder: '',
  datas: [],
  setFieldValue: null,
  handleBlur: null,
  handleChange: null,
};

SelectBox.propTypes = {
  id: string.isRequired,
  placeholder: string,
  datas: arrayOf(object),
  setFieldValue: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  handleBlur: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  handleChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
};

export default SelectBox;
