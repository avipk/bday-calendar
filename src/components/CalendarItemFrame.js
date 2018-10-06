import React from "react";

function CalendarItemFrame({ children }) {
  return (
    <div className="item-wrapper">
      <svg className="corner corner--tl">
        <use href="#item-corner" />
      </svg>
      <svg className="corner corner--tr">
        <use href="#item-corner" />
      </svg>
      <svg className="corner corner--bl">
        <use href="#item-corner" />
      </svg>
      <svg className="corner corner--br">
        <use href="#item-corner" />
      </svg>
      {children}
    </div>
  );
}

export default CalendarItemFrame;
