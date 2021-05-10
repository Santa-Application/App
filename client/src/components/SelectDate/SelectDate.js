import React from 'react';
import { selectDateBox, selectDateIcon } from './SelectDate.module.scss';
import classNames from 'classnames';
import PropTypes, { object, string } from 'prop-types';
import Icon from 'components/Icon/Icon';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/src/stylesheets/datepicker.scss';

const SelectDate = ({ field, inputProps }) => {
  const {
    id,
    onFocus,
    className,
    selectedDate,
    setSelectedDate,
    onSelect,
    setFieldValue,
  } = inputProps;
  const selectDateClasses = classNames(className, selectDateBox);

  const handleMinDate = () => {
    switch (field.name) {
      case 'dateOfBirth':
        return null;
      case 'recruitDate':
        return new Date();
      default:
        return null;
    }
  };

  return (
    <div className={selectDateClasses}>
      <DatePicker
        id={id}
        locale={ko}
        selected={selectedDate}
        selectsStart
        minDate={handleMinDate()}
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
        autoComplete="off"
        onSelect={date => {
          onSelect(date, field.name, setSelectedDate, setFieldValue);
        }}
        onFocus={onFocus}
        popperModifiers={{ preventOverflow: { enabled: true } }}
      />
      <label htmlFor="datePicker">
        <Icon className={selectDateIcon} shape="calendar" />
      </label>
    </div>
  );
};

SelectDate.defaultProps = {
  id: '',
  selectedDate: new Date(),
  setSelectedDate: null,
  onFocus: null,
  onSelect: null,
  setFieldValue: null,
};

SelectDate.propTypes = {
  id: string.isRequired,
  selectedDate: object,
  setSelectedDate: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([null]),
  ]),
  onFocus: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  onSelect: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  setFieldValue: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  className: string,
};

export default SelectDate;
