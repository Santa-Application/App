// select all input
export const handleFocusAllInput = e => {
  e.target.select();
};

// select date
export const handleSelectDate = (date, setSelectedDate) => {
  // console.log('select date: ', date, typeof date);
  setSelectedDate(date);
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
  setInputValue,
  setIsOpened
) => {
  setInputValue(e.target.textContent);
  setIsOpened(false);
};

export const handleChangeSelectBoxInput = (e, setInputValue, setIsOpened) => {
  console.log('e.target.value: ', e.target.value);
  console.log('setInputValue: ', setInputValue);
  setInputValue(e.target.value);
  setIsOpened(true);
};
