import React from 'react';
import { startOfWeek, endOfWeek, format, eachDay, differenceInDays } from "date-fns";

export const Grid = props => {
    const { gridConfig, leaseStartDate, leaseEndDate } = props;
    const { squareSize, headerFont} = gridConfig;
    const startDate = startOfWeek(leaseStartDate);
    const endDate = endOfWeek(leaseEndDate);
    const relevantDays = eachDay(startDate, endDate);
    let squares = [];
    relevantDays.forEach(d => {
        const rowY = Math.floor(Math.abs(differenceInDays(startDate, d))/ 7) * squareSize + headerFont + 2;
        squares.push(Box(squareSize, rowY, d));
    });
    return (
        <g>{squares}</g>
    )
}

const Box = (squareSize, y, date) => {
    const x = date.getDay() * squareSize;
    return (
        <g key={ format(date, 'YYYY-MM-DD') }>
            <rect stroke="grey" fill="none" width={ squareSize } height={ squareSize } y={y} x={x}/>
            <text fontFamily="Verdana" fontSize="8" y={y + squareSize} x={x}>{ format(date, 'Do') }</text>
            <title>{ format(date, 'MM/DD/YYYY') }</title>
        </g>
    );
}