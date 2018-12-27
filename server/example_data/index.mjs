import { getIndividuals } from "./individuals.mjs";
import { generateSchedualledPayments } from "./schedualedPayments.mjs";

export async function generateData() {
    let individuals = [];
    individuals.push(getIndividuals('cd13940d-1103-4f19-833f-70f05853f151'));
    individuals.push(getIndividuals('66085a23-634d-4e0e-8d6a-6dbf32a784de'));
    individuals.push(getIndividuals('8e57e566-6a3d-4b00-9964-08f809242ed3'));
    let leases = [];
    leases.push(await getLeases({
                    id: '2ee3c560-2d47-4f7b-8ca9-4db82d39f4a4',
                    addressId: 'bc2ca2d8-32c0-4ec5-ae95-94988ab61fd0',
                    landlords: ['8e57e566-6a3d-4b00-9964-08f809242ed3'],
                    tenents: ['66085a23-634d-4e0e-8d6a-6dbf32a784de'],
                    startDate: new Date(2018, 11, 6), 
                    monthlyAmount: 500, 
                    endDate: new Date(2019, 11, 6)
                }));
    leases.push(await getLeases({
                    id: '1d40fc33-58fa-484f-a5eb-c1acdaf2255d',
                    addressId: '5d23fcaa-5779-4960-92c8-08d01f77ef9c',
                    landlords: ['cd13940d-1103-4f19-833f-70f05853f151'],
                    tenents: ['66085a23-634d-4e0e-8d6a-6dbf32a784de', '8e57e566-6a3d-4b00-9964-08f809242ed3'],
                    startDate: new Date(2019, 4, 13), 
                    monthlyAmount: 630, 
                    endDate: new Date(2019, 11, 6)
                }));
    return {
        individuals, addresses, leases
    }
}

const addresses = [
    {
        id: 'bc2ca2d8-32c0-4ec5-ae95-94988ab61fd0',
        address: '38 Greenfield Gardens',
        postCode: 'NW2 1HX'
    },
    {
        id: '5d23fcaa-5779-4960-92c8-08d01f77ef9c',
        address: 'Flat 38 Thornaby House',
        postCode: 'E2 0BE'
    }
]

async function getLeases(leaseAggreement) {
    const { startDate, monthlyAmount, endDate } = leaseAggreement;
    const schedualedPayments = await generateSchedualledPayments({ startDate, monthlyAmount, endDate });
    Object.assign(leaseAggreement, { schedualedPayments });
    return leaseAggreement;
}