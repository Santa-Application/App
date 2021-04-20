import React, { useState } from 'react';
import { selectDateBox, selectDateIcon } from './SelectDate.module.scss';
import classNames from 'classnames';
import PropTypes, { object, string } from 'prop-types';
import Icon from 'components/Icon/Icon';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/src/stylesheets/datepicker.scss';

const SelectDate = ({ className, ...inputProps }) => {
  const selectDateClasses = classNames(className, selectDateBox);

  const { selectedDate, onSelect } = inputProps;

  const handleMinDate = () => {
    switch (inputProps.name) {
      case 'age':
        return null;
      case 'hikingDate':
        return new Date();
      default:
        return null;
    }
  };

  return (
    <div className={selectDateClasses}>
      <DatePicker
        id="datePicker"
        locale={ko}
        selected={selectedDate}
        selectsStart
        minDate={handleMinDate()}
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
        onSelect={onSelect}
        onFocus={inputProps.onFocus}
        popperModifiers={{ preventOverflow: { enabled: true } }}
      />
      <label htmlFor="datePicker">
        <Icon className={selectDateIcon} shape="calendar" />
      </label>
    </div>
  );
};

SelectDate.defaultProps = {
  className: '',
  selectedDate: null,
  handleDateSelect: null,
};

SelectDate.propTypes = {
  className: string,
  selectedDate: object,
  handleDateSelect: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
};

export default SelectDate;
