import React from 'react';
import { selectDateBox, selectDateIcon } from './SelectDate.module.scss';
import classNames from 'classnames';
import PropTypes, { object, string } from 'prop-types';
import Icon from 'components/Icon/Icon';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/src/stylesheets/datepicker.scss';

const SelectDate = ({
  className,
  selectedDate,
  setSelectedDate,
  handleDateSelect,
}) => {
  const selectDateClasses = classNames(className, selectDateBox);

  // const [selectedDate, setSelectedDate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => {
    return (
      <button className={selectDateClasses} onClick={onClick}>
        {value}
        <Icon className={selectDateIcon} shape="calendar" />
      </button>
    );
  };

  // const handleDateSelect = date => {
  //   console.log('select date: ', date, typeof date);
  //   console.log('start date: ', selectedDate, typeof selectedDate);
  //   setSelectedDate(date);
  // };

  // useEffect(() => {
  //   setSelectedDate(selectedDate);
  // }, [selectedDate]);

  return (
    <DatePicker
      locale={ko}
      selected={selectedDate}
      selectsStart
      minDate={new Date()}
      dateFormat="yyyy-MM-dd"
      placeholderText="YYYY-MM-DD"
      onSelect={handleDateSelect}
      popperModifiers={{ preventOverflow: { enabled: true } }}
      customInput={<CustomInput />}
    />
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
