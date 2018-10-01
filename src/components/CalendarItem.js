import React from 'react';
import PropTypes from 'prop-types';
import eventPropTypes from '../consts/eventPropTypes';
import CalendarItemFrame from './CalendarItemFrame';

function CalendarItem({ date, name, padding, itemSpacing, width, borderColor, event }) {
  const itemStyle = {
    padding: `${padding}px`,
    border: borderColor ? `1px solid ${borderColor}` : null,
  };

  return (
    <CalendarItemFrame cornerRadius={10} itemSpacing={itemSpacing} width={width}>
      <div className="item" style={itemStyle}>
        <div className="name">{name}</div>
        <div className="date">{date}</div>
        {event ? <div className="event">event {event.name}</div> : ''}
      </div>
    </CalendarItemFrame>
  );
}

CalendarItem.propTypes = {
  date: PropTypes.number.isRequired,
  name: PropTypes.string,
  event: PropTypes.shape(eventPropTypes),
  padding: PropTypes.number,
  itemSpacing: PropTypes.number,
  width: PropTypes.number,
  borderColor: PropTypes.string,
};

CalendarItem.defaultProps = {
  name: null,
  padding: 6,
  itemSpacing: 6,
  width: 20,
  borderColor: '#000',
};

export default CalendarItem;
