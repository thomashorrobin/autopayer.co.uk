import React from 'react';
import { startOfWeek, endOfWeek, differenceInDays, format } from "date-fns";
import { WeekDateDisplay } from "./WeekDateDisplay";
import { Grid } from "./Grid";

const gridConfig = {
    squareSize: 30,
    headerFont: 10
}

export const SevenColumnCalendar = props => {
    const { lease } = props;
    const { schedualedPayments } = lease;
    if (schedualedPayments.length === 0) return <></> 
    const leaseStartDate = schedualedPayments[0].startDate;
    const leaseEndDate = schedualedPayments[schedualedPayments.length - 1].startDate;
    const heightOfCalendar = Math.abs(differenceInDays(startOfWeek(leaseStartDate), endOfWeek(leaseEndDate)) / 7 ) * gridConfig.squareSize + gridConfig.headerFont + 7;
    return (
        <div className="sevenDayCalendar">
            <small>{ lease.id }</small>
            <p>{ lease.frequency }</p>
            <p>{ `start date: ${format(lease.startDate, 'YYYY-MM-DD')}` }</p>
            <p>{ `end date: ${format(lease.endDate, 'YYYY-MM-DD')}` }</p>
            <svg width={ `${ gridConfig.squareSize * 7 }px` } height={ `${ heightOfCalendar }px` }>
                <WeekDateDisplay squareSize={gridConfig.squareSize} headerFontSize={gridConfig.headerFont} />
                <Grid gridConfig={gridConfig} leaseStartDate={leaseStartDate} leaseEndDate={leaseEndDate} />
            </svg>
        </div>
    )
}
