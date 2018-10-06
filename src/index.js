import React from "react";
import { render } from "react-dom";
import CalendarPage from "./components/CalendarPage";
import SVGRoundedCorner from "./components/SVGRoundedCorner";
import DynamicStyle from "./components/DynamicStyle";

const events = [
  {
    dayInMonth: 3,
    name: "aaa"
  },
  {
    dayInMonth: 5,
    name: "bbb"
  }
];

const App = () => (
  <div>
    <DynamicStyle
      itemSpacing={6}
      itemRelativeWidth={20}
      itemPadding={3}
      itemSpacingFillColor="#000"
      cornerRadius={5}
    />
    <SVGRoundedCorner radius={10} />
    <CalendarPage
      monthIndex={0}
      monthName="תשרי"
      daysInMonth={30}
      events={events}
    />
  </div>
);

render(<App />, document.getElementById("app"));
