import React from 'react';
import PropTypes from 'prop-types';
import eventPropTypes from '../consts/eventPropTypes';

function CalendarItem({ date, name, padding, itemSpacing, width, borderColor, event }) {
  const wrapperStyle = {
    padding: `${itemSpacing / 2}px`,
    width: `${width}%`,
  };

  const itemStyle = {
    padding: `${padding}px`,
    border: borderColor ? `1px solid ${borderColor}` : null,
  };

  return (
    <div className="item-wrapper" style={wrapperStyle}>
      <div class="svg-frame">
        <svg viewBox="0 0 150 100" preserveAspectRatio="none">
          <path
            d="m 0 0 h150 v100 h-150 v-100 
                 m 13 3 
                 a 10 10 0 0 0 -10 10 
                 v74 
                 a 10 10 0 0 0 10 10 
                 h124 
                 a 10 10 0 0 0 10 -10 
                 v -74 
                 a 10 10 0 0 0 -10 -10 
                 h-124"
          />
        </svg>
      </div>
      <div className="item" style={itemStyle}>
        <div className="name">{name}</div>
        <div className="date">{date}</div>
        {event ? <div className="event">event {event.name}</div> : ''}
      </div>
    </div>
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
