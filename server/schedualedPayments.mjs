import fetch from "node-fetch";

const host = 'http://localhost:5000';

export const generateSchedualledMonthlyPayments = leaseAggreement => {
    let payload = Object.assign({}, leaseAggreement, { monthlyAmount: leaseAggreement.amount });
    return new Promise((resolve, reject) => {
        fetch(`${ host }/api/schedualedpaymentsmonthly`, {
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
        fetch(`${ host }/api/schedualedpaymentsweekly`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(payments => resolve(payments))
        .catch(e => reject(e));
    });
}
    