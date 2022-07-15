import React from "react";
import { CalendarDate, CaretUp } from "react-bootstrap-icons";
import { calendarItems } from "../constants";

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="header">
        <div className="title">
          <CalendarDate size="18" />
          <p>Calendar</p>
        </div>
        <div className="btns">
          <span>
            <CaretUp size="20" />
          </span>
        </div>
      </div>
      <div className="calendar-items">
        {calendarItems.map((item) => (
          <div className="calendar-item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
