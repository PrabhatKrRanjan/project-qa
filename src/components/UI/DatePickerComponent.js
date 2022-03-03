import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./Card";
import "./DatePickerComponent.css";

const DatePickerComponent = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Card>
      <div className="date-input">
        <label>Start Date :</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
          dateFormat="yyyy/MM/dd"
        />
      </div>
      <div className="date-input">
        <label>End Date :</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
          dateFormat="yyyy/MM/dd"
        />
      </div>
      <button
        className="date-button"
        onClick={() => props.getDates({ startDate, endDate })}
      >
        Submit
      </button>
    </Card>
  );
};

export default DatePickerComponent;
