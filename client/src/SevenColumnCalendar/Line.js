import React from 'react';
import { startOfWeek, min, max, addDays, endOfWeek, differenceInDays } from "date-fns";

export function SchedualedPayment(schedualedPayment, gridConfig, firstday) {
    let paymentSplits = [];
    let workingStartOfTheWeek = startOfWeek(schedualedPayment.startDate);
    var next_y = gridConfig.squareSize * Math.abs(differenceInDays(firstday, workingStartOfTheWeek)) / 7 + gridConfig.squareSize -2;
    do {
        let x_start = differenceInDays(max(workingStartOfTheWeek, schedualedPayment.startDate), workingStartOfTheWeek) * gridConfig.squareSize + gridConfig.squareSize / 2;
        let x_end = differenceInDays(min(endOfWeek(workingStartOfTheWeek), schedualedPayment.endDate), workingStartOfTheWeek) * gridConfig.squareSize + gridConfig.squareSize / 2;
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
