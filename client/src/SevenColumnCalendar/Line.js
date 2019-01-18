import React from 'react';
import { startOfWeek, addDays, differenceInDays } from "date-fns";

export function SchedualedPayment(schedualedPayment, gridConfig, firstday) {
    let paymentSplits = [];
    let workingStartOfTheWeek = startOfWeek(schedualedPayment.startDate);
    var next_y = calcY(firstday, gridConfig, workingStartOfTheWeek);
    do {
        paymentSplits.push(<circle key={`${next_y}-circle`} stroke="red" fill="purple" r="8" cx={calcX(gridConfig, schedualedPayment.dueDate, workingStartOfTheWeek)} cy={next_y} />);
        paymentSplits.push(<line key={`${next_y}-line`} stroke="red" strokeWidth="8" x1={calcX(gridConfig, schedualedPayment.startDate, workingStartOfTheWeek)} x2={calcX(gridConfig, schedualedPayment.endDate, workingStartOfTheWeek)} y1={next_y} y2={next_y} strokeLinecap="round" />);
        workingStartOfTheWeek = addDays(workingStartOfTheWeek, 7);
        next_y = gridConfig.squareSize + next_y;
    } while (new Date(schedualedPayment.endDate) > workingStartOfTheWeek)
    return (
        <g key={schedualedPayment.id}>
            {paymentSplits}
        </g>
    )
}

const calcY = (startDate, gridConfig, date) => {
    return gridConfig.squareSize * Math.floor(differenceInDays(date, startDate) / 7) + gridConfig.squareSize -2;
}

const calcX = (gridConfig, date, weekStart) => {
    return differenceInDays(date, weekStart) * gridConfig.squareSize + gridConfig.squareSize / 2;
}