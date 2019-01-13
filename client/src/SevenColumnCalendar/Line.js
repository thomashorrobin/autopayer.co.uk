import React from 'react';
import { startOfWeek, min, max, addDays, endOfWeek, differenceInDays } from "date-fns";

export function SchedualedPayment(schedualedPayment, gridConfig, firstday) {
    let paymentSplits = [];
    let workingStartOfTheWeek = startOfWeek(schedualedPayment.startDate);
    var next_y = calcY(firstday, gridConfig, workingStartOfTheWeek);
    do {
        let x_start = calcX(gridConfig, max(workingStartOfTheWeek, schedualedPayment.startDate));
        let x_end = calcX(gridConfig, min(endOfWeek(workingStartOfTheWeek), schedualedPayment.endDate));
        paymentSplits.push(<line key={next_y} stroke="red" strokeWidth="8" x1={x_start} x2={x_end} y1={next_y} y2={next_y} strokeLinecap="round" />);
        workingStartOfTheWeek = addDays(workingStartOfTheWeek, 7);
        next_y = gridConfig.squareSize + next_y;
    } while (new Date(schedualedPayment.endDate) > workingStartOfTheWeek)
    return (
        <g key={schedualedPayment.dueDate}>
            {paymentSplits}
        </g>
    )
}

const calcY = (startDate, gridConfig, date) => {
    return gridConfig.squareSize * Math.floor(Math.abs(differenceInDays(startDate, date)) / 7) + gridConfig.squareSize -2;
}

const calcX = (gridConfig, date) => {
    return differenceInDays(date, startOfWeek(date)) * gridConfig.squareSize + gridConfig.squareSize / 2;
}