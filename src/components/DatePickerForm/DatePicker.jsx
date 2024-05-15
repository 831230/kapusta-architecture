import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarBlock, CalendarIcon, Label, CalendarInput } from './DatePickerStyles';

export default function CreateDatePicker({ onDateChange }) {
    const [startDate, setStartDate] = useState(new Date());
  
    useEffect(() => {
      onDateChange(moment(startDate).format('DD-MM-YYYY'));
    }, [onDateChange, startDate]);
  
    return (
      <CalendarBlock>
        <Label htmlFor="date" data-for="date">
          <CalendarIcon>
          <svg width="20" height="18">
      <use href="./assets/icons_function.svg#icon-calendar"></use>
      </svg>
          </CalendarIcon>
          <DatePicker
            id="date"
            as={CalendarInput}
            selected={startDate}
            onChange={date => {
              setStartDate(date);
            }}
            dateFormat="dd.MM.yyyy"
          />
        </Label>
      </CalendarBlock>
    );
  }