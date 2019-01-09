import React from 'react';
import { startOfWeek, endOfWeek, differenceInDays } from "date-fns";
import { WeekDateDisplay } from "./WeekDateDisplay";
import { Grid } from "./Grid";

const gridConfig = {
    squareSize: 30,
    headerFont: 10
}

export const SevenColumnCalendar = props => {
    const { schedualedPayments } = props;
    if (schedualedPayments.length === 0) return <></> 
    const leaseStartDate = schedualedPayments[0].startDate;
    const leaseEndDate = schedualedPayments[schedualedPayments.length - 1].startDate;
    const heightOfCalendar = Math.abs(differenceInDays(startOfWeek(leaseStartDate), endOfWeek(leaseEndDate)) / 7 ) * gridConfig.squareSize + gridConfig.headerFont + 7;
    return (
        <div className="sevenDayCalendar">
            <svg width={ `${ gridConfig.squareSize * 7 }px` } height={ `${ heightOfCalendar }px` }>
                <WeekDateDisplay squareSize={gridConfig.squareSize} headerFontSize={gridConfig.headerFont} />
                <Grid gridConfig={gridConfig} leaseStartDate={leaseStartDate} leaseEndDate={leaseEndDate} />
            </svg>
        </div>
    )
}
