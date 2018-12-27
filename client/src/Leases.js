import { createReducer } from 'redux-starter-kit';

function addAllLeasesReducer(state, action) {
    const { leases } = action.payload;
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

export const leasesReducer = createReducer([], {
    ADD_ALL_LEASES: addAllLeasesReducer,
    ADD_OR_UPDATE_LEASE: addOrUpdateLeasesReducer
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
