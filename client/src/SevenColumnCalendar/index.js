import React from 'react';
import { startOfWeek, endOfWeek, differenceInDays, format } from "date-fns";
import { WeekDateDisplay } from "./WeekDateDisplay";
import { Grid } from "./Grid";
import { SchedualedPayment } from "./Line";

const gridConfig = {
    squareSize: 30,
    headerFont: 10
}

export const SevenColumnCalendar = props => {
    const { lease } = props;
    const { schedualedPayments } = lease;
    if (schedualedPayments.length === 0) return <></> 
    const heightOfCalendar = Math.abs(differenceInDays(startOfWeek(lease.startDate), endOfWeek(lease.endDate)) / 7 ) * gridConfig.squareSize + gridConfig.headerFont + 7;
    let schedualedPaymentSVGs = [];
    schedualedPayments.forEach(sp => {
        schedualedPaymentSVGs.push(SchedualedPayment(sp, gridConfig, startOfWeek(lease.startDate)));
    });

    return (
        <div className="sevenDayCalendar">
            <small>{ lease.id }</small>
            <p>{ lease.frequency }</p>
            <p>{ `start date: ${format(lease.startDate, 'YYYY-MM-DD')}` }</p>
            <p>{ `end date: ${format(lease.endDate, 'YYYY-MM-DD')}` }</p>
            <svg width={ `${ gridConfig.squareSize * 7 }px` } height={ `${ heightOfCalendar }px` }>
                <WeekDateDisplay squareSize={gridConfig.squareSize} headerFontSize={gridConfig.headerFont} />
                <Grid gridConfig={gridConfig} leaseStartDate={lease.startDate} leaseEndDate={lease.endDate} />
                {schedualedPaymentSVGs}
            </svg>
        </div>
    )
}
