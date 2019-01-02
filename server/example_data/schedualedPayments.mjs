import fetch from "node-fetch";

export const generateSchedualledMonthlyPayments = leaseAggreement => {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:5000/api/schedualedpaymentsmonthly', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(leaseAggreement)
            })
            .then(response => response.json())
            .then(payments => resolve(payments))
            .catch(e => reject(e));
        });
    }
    

export const generateSchedualledWeeklyPayments = leaseAggreement => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:5000/api/schedualedpaymentsweekly', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(leaseAggreement)
        })
        .then(response => response.json())
        .then(payments => resolve(payments))
        .catch(e => reject(e));
    });
}
    