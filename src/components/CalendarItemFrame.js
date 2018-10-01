import React from 'react';

function CalendarItemFrame({ cornerRadius, itemSpacing, width, children }) {
  const wrapperStyle = {
    padding: `${itemSpacing / 2}px`,
    width: `${width}%`,
  };

  return (
    <div className="item-wrapper" style={wrapperStyle}>
      <svg className="corner corner--tl" width={cornerRadius} height={cornerRadius}>
        <use href="#item-corner" />
      </svg>
      <svg className="corner corner--tr" width={cornerRadius} height={cornerRadius}>
        <use href="#item-corner" />
      </svg>
      <svg className="corner corner--bl" width={cornerRadius} height={cornerRadius}>
        <use href="#item-corner" />
      </svg>
      <svg className="corner corner--br" width={cornerRadius} height={cornerRadius}>
        <use href="#item-corner" />
      </svg>
      {children}
    </div>
  );
}

export default CalendarItemFrame;
