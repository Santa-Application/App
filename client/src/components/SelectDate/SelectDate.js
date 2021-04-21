import React from 'react';
import { selectDateBox, selectDateIcon } from './SelectDate.module.scss';
import classNames from 'classnames';
import PropTypes, { object, string } from 'prop-types';
import Icon from 'components/Icon/Icon';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/src/stylesheets/datepicker.scss';

const SelectDate = ({ field, ...inputProps }) => {
  const { id, onFocus, className, selectedDate, onSelect } = inputProps;
  const selectDateClasses = classNames(className, selectDateBox);

  /* ------------------
  전달될 상태와 핸들러.
  상위 컴포넌트에서 작성해주세요.
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log('state date: ', selectedDate, typeof selectedDate);
  
  * onSelect
  const handleDateSelect = date => {
    console.log('select date: ', date, typeof date);
    setSelectedDate(date);
  }; 

  * onFocus
    const handleFocusInput = e => {
    e.target.select();
  };
  ----------------------------- */

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
        onSelect={onSelect}
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
  selectedDate: null,
  onFocus: null,
  onSelect: null,
  className: '',
};

SelectDate.propTypes = {
  id: string.isRequired,
  selectedDate: object,
  onFocus: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  onSelect: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  className: string,
};

export default SelectDate;
