import React from "react";
import PropTypes from "prop-types";
import eventPropTypes from "../consts/eventPropTypes";
import CalendarItemFrame from "./CalendarItemFrame";

function CalendarItem({ date, name, event }) {
  return (
    <CalendarItemFrame>
      <div className="item">
        <div className="name">{name}</div>
        <div className="date">{date}</div>
        {event ? <div className="event">event {event.name}</div> : ""}
      </div>
    </CalendarItemFrame>
  );
}

CalendarItem.propTypes = {
  date: PropTypes.number.isRequired,
  name: PropTypes.string,
  event: PropTypes.shape(eventPropTypes)
};

CalendarItem.defaultProps = {
  name: null,
  event: null
};

export default CalendarItem;
