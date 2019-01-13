import React from 'react';
import { startOfWeek, min, max, addDays, endOfWeek, differenceInDays } from "date-fns";

export function SchedualedPayment(schedualedPayment, gridConfig, firstday) {
    let paymentSplits = [];
    let workingStartOfTheWeek = startOfWeek(schedualedPayment.startDate);
    var next_y = calcY(firstday, gridConfig, workingStartOfTheWeek);
    do {
        const s = max(workingStartOfTheWeek, schedualedPayment.startDate);
        let x_start = calcX(gridConfig, s);
        if (s.getTime() !== new Date(schedualedPayment.startDate).getTime()) x_start = x_start - gridConfig.squareSize / 2;
        const e = min(endOfWeek(workingStartOfTheWeek), schedualedPayment.endDate);
        let x_end = calcX(gridConfig, e);
        if (e.getTime() !== new Date(schedualedPayment.endDate).getTime()) x_end = x_end + gridConfig.squareSize / 2;
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