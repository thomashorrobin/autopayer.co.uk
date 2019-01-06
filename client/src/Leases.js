import { createReducer } from 'redux-starter-kit';

function addAllLeasesReducer(state, action) {
    const { leases } = action.payload;
    leases.forEach(lease => window.sendToSocket(requestSchedualedPaymentsFoeLease(lease)));
    return state.concat(leases);
}

function addOrUpdateLeasesReducer(state, action) {
    const { id, lease } = action.payload

    if (state.some(i => i.id === id)) {
        const x = state.findIndex(i => i.id === id);
        state[x] = lease;
    } else {
        state.push(lease);
    }
}

const REQUEST_SCHEDUALED_PAYMENTS = 'REQUEST_SCHEDUALED_PAYMENTS';
export const ADD_SCHEDUALED_PAYMENTS_TO_LEASE = 'ADD_SCHEDUALED_PAYMENTS_TO_LEASE';

function addSchedualedPaymentsToLeaseReducer(state, action) {
    const i = state.findIndex(l => l.id === action.id);
    let lease = state.find(l => l.id === action.id);
    lease.schedualedPayments = action.payload;
    state[i] = lease;
    return state;
}

export const leasesReducer = createReducer([], {
    ADD_ALL_LEASES: addAllLeasesReducer,
    ADD_OR_UPDATE_LEASE: addOrUpdateLeasesReducer,
    ADD_SCHEDUALED_PAYMENTS_TO_LEASE: addSchedualedPaymentsToLeaseReducer
  })

export const ADD_ALL_LEASES = 'ADD_ALL_LEASES';
export const ADD_OR_UPDATE_LEASE = 'ADD_OR_UPDATE_LEASE';

export const addAllLeases = leases => {
    return {
        type: ADD_ALL_LEASES,
        payload: {
            leases
        }
    }
}

export const requestSchedualedPaymentsFoeLease = lease => {
    return {
        type: REQUEST_SCHEDUALED_PAYMENTS,
        payload: lease
    }
}
