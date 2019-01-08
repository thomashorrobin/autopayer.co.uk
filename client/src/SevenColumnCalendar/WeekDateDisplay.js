import React from 'react';
import { startOfWeek, addDays, format } from "date-fns";

export const WeekDateDisplay = props => {
    const { squareSize, headerFontSize } = props;
    const firstDayOfTheWeek = startOfWeek(new Date());
    let dateDayBoxes = [];
    for (let i = 0; i < 7; i++) {
        const d = addDays(firstDayOfTheWeek, i);
        const xOffset = i * squareSize;
        dateDayBoxes.push(<text key={ format(d, 'ddd') } fontFamily="Verdana" fontSize={headerFontSize} y={headerFontSize} x={xOffset}>{ format(d, 'ddd') }</text>);
    }
    return <g>
        { dateDayBoxes }
    </g>
}