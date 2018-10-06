import React from 'react';
import PropTypes from 'prop-types';
import CalendarItem from './CalendarItem';
import eventPropTypes from '../consts/eventPropTypes';

function CalendarPage({ monthIndex, monthName, daysInMonth, events, image }) {
  const items = [];
  const orderedEvents =
    events && events.slice(0).sort((eventA, eventB) => eventA.dayInMonth - eventB.dayInMonth);

  for (let i = 0; i < daysInMonth; i++) {
    let event =
      orderedEvents && orderedEvents.length > 0 && orderedEvents[0].dayInMonth === i
        ? orderedEvents.shift()
        : null;

    items.push({
      date: i,
      name: `name ${i}`,
      event: event,
    });
  }

  return (
    <React.Fragment>
      <h2>{monthName}</h2>
      <div className="page">
        {items.map((item, index) => (
          <CalendarItem
            key={`ci_${index}`}
            date={item.date}
            name={item.name}
            event={item.event}            
          />
        ))}
      </div>
    </React.Fragment>
  );
}

CalendarPage.propTypes = {
  monthIndex: PropTypes.number.isRequired,
  monthName: PropTypes.string.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(eventPropTypes),
};

export default CalendarPage;
