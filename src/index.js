import React from 'react';
import { render } from 'react-dom';
import CalendarPage from './components/CalendarPage';

const events = [
  {
    dayInMonth: 3,
    name: 'aaa',
  },
  {
    dayInMonth: 5,
    name: 'bbb',
  },
];

const App = () => (
  <div>
    <CalendarPage monthIndex={0} monthName="תשרי" daysInMonth={30} events={events} />
  </div>
);

render(<App />, document.getElementById('app'));
