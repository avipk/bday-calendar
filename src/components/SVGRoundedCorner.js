import React from 'react';

function SVGRoundedCorner({ radius, fill }) {
  return (
    <svg className="corner" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
      <symbol viewBox={`0 0 ${radius} ${radius}`} id="item-corner">
        <path         
          d={`M ${radius} 0      
                    h -${radius} v ${radius}
                    a ${radius} ${radius} 0 0 1 ${radius} -${radius}`}
        />
      </symbol>
    </svg>
  );
}

export default SVGRoundedCorner;
