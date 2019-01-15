import fetch from "node-fetch";

export const generateSchedualledMonthlyPayments = leaseAggreement => {
    let payload = Object.assign({}, leaseAggreement, { monthlyAmount: leaseAggreement.amount });
    return new Promise((resolve, reject) => {
        fetch('http://sample-app-schedualed-payments:80/api/schedualedpaymentsmonthly', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(payments => resolve(payments))
        .catch(e => reject(e));
    });
}
    

export const generateSchedualledWeeklyPayments = leaseAggreement => {
    let payload = Object.assign({}, leaseAggreement, { weeklyAmount: leaseAggreement.amount });
    return new Promise((resolve, reject) => {
        fetch('http://sample-app-schedualed-payments:80/api/schedualedpaymentsweekly', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(payments => resolve(payments))
        .catch(e => reject(e));
    });
}
    