import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import css from './DatePicker.module.css';
import calendar from '../../assets/calendar.svg'

export default function CreateDatePicker({ onDateChange }) {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    onDateChange(moment(startDate).format('DD-MM-YYYY'));
  }, [onDateChange, startDate]);

  return (
    <div className={css.CalendarBlock}>
      <label className={css.Label} htmlFor="date" data-for="date">

        <img src={calendar} alt="Reports Icon" className={css.CalendarIcon} />

        <DatePicker
          id="date"
          className={css.CalendarInput}
          selected={startDate}
          onChange={date => {
            setStartDate(date);
          }}
          dateFormat="dd.MM.yyyy"
        />
      </label>
    </div>
  );
};