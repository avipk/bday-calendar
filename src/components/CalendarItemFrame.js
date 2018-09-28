import React from 'react';

function CalendarItemFrame ({radius, fill}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <symbol  viewBox={`0 0 ${radius} ${radius}`} id="item-corner">
              <path
                fill={fill}            
                d={`M ${radius} 0      
                    h -${radius} v ${radius}
                    a ${radius} ${radius} 0 0 1 ${radius} -${radius}`}/>
            </symbol>
        </svg>
    );
}

export default CalendarItemFrame;