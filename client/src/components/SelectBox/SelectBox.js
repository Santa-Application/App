import React from 'react';
import Icon from 'components/Icon/Icon';
import {
  selectBoxContainer,
  selectBoxButton,
  selectBoxList,
} from './SelectBox.module.scss';
import PropTypes, { string, bool, func, array, arrayOf } from 'prop-types';
import classNames from 'classnames';

const SelectBox = ({
  className,
  isOpened,
  selectItem,
  handleOpenSelectBox,
  handleClickItem,
  // data,
}) => {
  const containerClasses = classNames(className, selectBoxContainer);
  const selectButtonClasses = classNames(className, selectBoxButton);
  const selectListClasses = classNames(className, selectBoxList);
  // mock data
  const data = [
    '최우영산',
    '김데레사산',
    '이웅모산',
    '야무산',
    'devLee산',
    '박두진산',
    '신제용산',
    '최우영산',
    '김데레사산',
    '이웅모산',
    '야무산',
    'devLee산',
    '박두진산',
    '신제용산',
  ];

  // const [isOpened, setIsOpened] = useState(false);
  // const [selectItem, setSelectItem] = useState('select title');

  // const handleOpenSelectBox = () => {
  //   setIsOpened(!isOpened);
  // };

  // const handleClickItem = e => {
  //   setSelectItem(e.target.textContent);
  //   setIsOpened(false);
  // };

  return (
    <div className={containerClasses} role="listbox" tabIndex="-1">
      <button className={selectButtonClasses} onClick={handleOpenSelectBox}>
        <p>{selectItem}</p>
        <Icon shape={isOpened ? 'selectClose' : 'selectOpen'} />
      </button>
      {isOpened && (
        <ul className={selectListClasses}>
          {data.map(item => {
            return (
              <li key={item.id}>
                <button type="button" onClick={handleClickItem} role="option">
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

SelectBox.defaultProps = {
  className: '',
  isOpened: false,
  selectItem: '',
  handleOpenSelectBox: null,
  handleClickItem: null,
  data: [],
};

SelectBox.propTypes = {
  className: string,
  isOpened: bool,
  selectItem: string.isRequired,
  handleOpenSelectBox: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  handleClickItem: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  data: arrayOf(string),
};

export default SelectBox;
