/* eslint-disable indent */
import React from 'react';
import Icon from 'components/Icon/Icon';
import {
  selectBoxContainer,
  selectBoxInput,
  selectBoxList,
} from './SelectBox.module.scss';
import PropTypes, { string, bool, arrayOf, object } from 'prop-types';
import classNames from 'classnames';

const SelectBox = ({ field, ...inputProps }) => {
  const {
    id,
    isOpened,
    inputValue,
    datas,
    onFocus,
    onClickInputButton,
    onClickListButton,
    onChange,
  } = inputProps;

  const selectBoxClasses = {
    container: selectBoxContainer,
    input: selectBoxInput,
    list: selectBoxList,
  };

  const filtered = datas.filter(data => {
    return data.content.toLowerCase().includes(field.value.toLowerCase());
  });

  /* 상위 컴포넌트에서 사용할 이벤트와 상태 값 --------------------------------------------
  // mock datas
  // const datas = 
  
  const [isOpened, setIsOpened] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('등산할 산');

  const handler = {
    onFocus: handleFocusInput,
    onClick: {
      inputButton: handleOpenSelectBox,
      listButton: handleClickItem,
    },
    onChange: handleInputValue,
  };

  const handleFocusInput = e => {
    setIsOpened(true);
    e.target.select();
  };

  const handleOpenSelectBox = () => {
    setIsOpened(!isOpened);
  };

  const handleClickItem = e => {
    setInputValue(e.target.textContent);
    setIsOpened(false);
  };

  const handleInputValue = e => {
    setInputValue(e.target.value);
    setIsOpened(true);
  };

  
 -------------------------------------- */

  console.log(field);

  return (
    <div className={selectBoxClasses.container} tabIndex="-1">
      <div className={selectBoxClasses.input}>
        <input
          id={id}
          type="text"
          onFocus={onFocus}
          onChange={onChange}
          autoComplete="off"
          // value={field.value}
          // value={}
          {...field}
        />
        <button type="button" onClick={onClickInputButton}>
          <Icon shape={isOpened ? 'selectClose' : 'selectOpen'} />
        </button>
      </div>
      {isOpened && (
        <ul className={selectBoxClasses.list} role="listbox">
          {filtered.length === 0
            ? datas.map(data => {
                return (
                  <li key={data.id} role="option">
                    <button onClick={onClickListButton}>{data.content}</button>
                  </li>
                );
              })
            : filtered.map(item => {
                return (
                  <li key={item.id} role="option">
                    <button onClick={onClickListButton}>{item.content}</button>
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
  isOpened: false,
  inputValue: '',
  onFocus: null,
  onClickInputButton: null,
  onClickListButton: null,
  datas: [],
};

SelectBox.propTypes = {
  id: string.isRequired,
  isOpened: bool.isRequired,
  inputValue: string.isRequired,
  onFocus: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  onClickInputButton: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  onClickListButton: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  datas: arrayOf(object),
};

export default SelectBox;
