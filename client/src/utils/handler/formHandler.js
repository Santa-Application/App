import { createListPagePath } from 'utils/path';

// select all input
export const handleFocusAllInput = e => {
  // e.target.select();
  // 모바일 시뮬레이터 마우스 우클릭 선택되는 버그 해결용, 웹에서는 문제가 없다.
  window.setTimeout(() => e.target.select());
};

// select date
export const handleSelectDate = (
  date,
  fieldName,
  setSelectedDate,
  setFieldValue
) => {
  setSelectedDate(date);
  setFieldValue(fieldName, date);
};

// select box
export const handleFocusSelectBoxInput = (e, setIsOpened) => {
  setIsOpened(true);
  e.target.select();
};

export const handleClickSelectBoxInputButton = (e, setIsOpened, isOpened) => {
  setIsOpened(!isOpened);
};

export const handleClickSelectBoxListItemButton = (
  e,
  fieldName,
  setFieldValue,
  setIsOpened
) => {
  setFieldValue(fieldName, e.target.textContent);
  setIsOpened(false);
};

export const handleBlurSelectBoxInput = setIsOpened => {
  setIsOpened(false);
};

// file input
export const handleChangeFileInput = (e, setFieldValue) => {
  // const imageUrlData = new FormData();
  // imageUrlData.append(e.target.name, e.target.files[0]);
  setFieldValue('imageURL', e.target.files[0]);
};

// range slider
export const handleChangeSlider = (
  _,
  newValue,
  fieldName,
  setCurrentAge,
  setFieldValue
) => {
  setCurrentAge(newValue);
  setFieldValue(fieldName, newValue);
};

export const handleClickCancelButton = (history, pageInfo) => {
  history.push(createListPagePath(pageInfo));
};
