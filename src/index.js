import React from 'react';
import { render } from 'react-dom';
import CalendarPage from './components/CalendarPage';
import SVGRoundedCorner from './components/SVGRoundedCorner';

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
    <SVGRoundedCorner radius={10} fill="red" />
    <CalendarPage monthIndex={0} monthName="תשרי" daysInMonth={30} events={events} />
  </div>
);

render(<App />, document.getElementById('app'));
