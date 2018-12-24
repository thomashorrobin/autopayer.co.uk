import dateFNS from "date-fns";
const { addDays } = dateFNS;

export const generateSchedualledPayments = leaseAggreement => {
    const { startDate, intervil, endDate } = leaseAggreement;
    let nextDate = startDate;
    let schedualledPayments = [];
    while (nextDate < endDate) {
        let newPayment = {
            from: nextDate,
            to: addDays(nextDate, intervil - 1)
        }
        schedualledPayments.push(newPayment);
        nextDate = addDays(nextDate, intervil);
    }
    return schedualledPayments;
}
