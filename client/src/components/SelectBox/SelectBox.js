/* eslint-disable indent */
import React, { useState } from 'react';
import Icon from 'components/Icon/Icon';
import {
  selectBoxContainer,
  selectBoxInput,
  selectBoxList,
} from './SelectBox.module.scss';
import PropTypes, { string, bool, arrayOf, object } from 'prop-types';
import classNames from 'classnames';

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

  const filtered = datas.filter(data => {
    return data.content.includes(field.value);
  });

  const [isOpened, setIsOpened] = useState(false);

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
    setIsOpened(false);
    setFieldValue(id, e.target.textContent);
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
          {filtered.length === 0
            ? datas.map(data => {
                return (
                  <li key={data.id} role="option">
                    <button type="button">{data.content}</button>
                  </li>
                );
              })
            : filtered.map(item => {
                return (
                  <li key={item.id} role="option">
                    <button>{item.content}</button>
                  </li>
                );
              })}
        </ul>
      )}
    </div>
  );
};

SelectBox.defaultProps = {};

SelectBox.propTypes = {};

export default SelectBox;

// /* eslint-disable indent */
// import React from 'react';
// import Icon from 'components/Icon/Icon';
// import {
//   selectBoxContainer,
//   selectBoxInput,
//   selectBoxList,
// } from './SelectBox.module.scss';
// import PropTypes, { string, bool, arrayOf, object } from 'prop-types';
// import classNames from 'classnames';

// const SelectBox = ({ field, inputProps }) => {
//   const {
//     id,
//     isOpened,
//     setIsOpened,
//     touched,
//     placeholder,
//     datas,
//     onFocus,
//     handleBlur,
//     onClickInputButton,
//     onClickListButton,
//     // onChange,
//   } = inputProps;

//   const selectBoxClasses = {
//     container: selectBoxContainer,
//     input: selectBoxInput,
//     list: selectBoxList,
//   };

//   const filtered = datas.filter(data => {
//     return data.content.toLowerCase().includes(field.value.toLowerCase());
//   });

//   /* 상위 컴포넌트에서 사용할 이벤트와 상태 값 --------------------------------------------
//   // mock datas
//   // const datas =

//   const [isOpened, setIsOpened] = React.useState(false);
//   const [inputValue, setInputValue] = React.useState('등산할 산');

//   const handler = {
//     onFocus: handleFocusInput,
//     onClick: {
//       inputButton: handleOpenSelectBox,
//       listButton: handleClickItem,
//     },
//     onChange: handleInputValue,
//   };

//   const handleFocusInput = e => {
//     setIsOpened(true);
//     e.target.select();
//   };

//   const handleOpenSelectBox = () => {
//     setIsOpened(!isOpened);
//   };

//   const handleClickItem = e => {
//     setInputValue(e.target.textContent);
//     setIsOpened(false);
//   };

//   const handleInputValue = e => {
//     setInputValue(e.target.value);
//     setIsOpened(true);
//   };

//  -------------------------------------- */

//   // console.log(field);

//   return (
//     <div className={selectBoxClasses.container} tabIndex="-1">
//       <div className={selectBoxClasses.input}>
//         <input
//           id={id}
//           type="text"
//           onFocus={onFocus}
//           // onChange={onChange}
//           autoComplete="off"
//           placeholder={placeholder}
//           {...field}
//           // onBlur={handleBlur}
//           // name={field.name}
//           // value={field.value}
//         />
//         <button type="button" onClick={onClickInputButton}>
//           <Icon shape={isOpened ? 'selectClose' : 'selectOpen'} />
//         </button>
//       </div>
//       {isOpened && (
//         <ul className={selectBoxClasses.list} role="listbox">
//           {filtered.length === 0
//             ? datas.map(data => {
//                 return (
//                   <li key={data.id} role="option">
//                     <button onClick={onClickListButton}>{data.content}</button>
//                   </li>
//                 );
//               })
//             : filtered.map(item => {
//                 return (
//                   <li key={item.id} role="option">
//                     <button onClick={onClickListButton}>{item.content}</button>
//                   </li>
//                 );
//               })}
//         </ul>
//       )}
//     </div>
//   );
// };

// SelectBox.defaultProps = {
//   id: '',
//   isOpened: false,
//   inputValue: '',
//   onFocus: null,
//   onClickInputButton: null,
//   onClickListButton: null,
//   datas: [],
// };

// SelectBox.propTypes = {
//   id: string.isRequired,
//   isOpened: bool.isRequired,
//   inputValue: string.isRequired,
//   onFocus: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
//   onClickInputButton: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.oneOf([null]),
//   ]),
//   onClickListButton: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.oneOf([null]),
//   ]),
//   onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
//   datas: arrayOf(object),
// };

// export default SelectBox;
