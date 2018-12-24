const individuals = [
    {
        firstName: 'Thomas',
        lastName: 'Horrobin',
        id: '8e57e566-6a3d-4b00-9964-08f809242ed3',
    },
    {
        firstName: 'Ella',
        lastName: 'Horrobin',
        id: 'fe91023e-6355-4805-923a-267ce8ee01d3',
    },
    {
        firstName: 'David',
        lastName: 'Dunn',
        id: '2ab1aa1f-8888-47f9-ad12-e2891c876bec',
    },
    {
        firstName: 'Barry',
        lastName: 'Petherak',
        id: 'cd13940d-1103-4f19-833f-70f05853f151',
    },
    {
        firstName: 'Lisa',
        lastName: 'Simpson',
        id: '66085a23-634d-4e0e-8d6a-6dbf32a784de',
    }
]

export const getIndividuals = id => {
    return individuals.find(i => i.id === id);
}