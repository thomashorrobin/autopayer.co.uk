import React from 'react';
import { WeekDateDisplay } from "./WeekDateDisplay";
import { Grid } from "./Grid";

const gridConfig = {
    squareSize: 30,
    headerFont: 10
}

export const SevenColumnCalendar = props => {
    const { schedualedPayments } = props;
    const leaseStartDate = schedualedPayments[0].startDate;
    const leaseEndDate = schedualedPayments[schedualedPayments.length - 1].startDate;
    return (
        <svg width="400px" height="700px">
            <WeekDateDisplay squareSize={gridConfig.squareSize} headerFontSize={gridConfig.headerFont} />
            <Grid gridConfig={gridConfig} leaseStartDate={leaseStartDate} leaseEndDate={leaseEndDate} />
        </svg>
    )
}
