import { createReducer } from 'redux-starter-kit';

function addAllAddresses(state, action) {
    const { addresses } = action.payload

    state.push(addresses);
}

function addOrUpdateAddress(state, action) {
    const { id, address } = action.payload

    if (state.some(i => i.id === id)) {
        const x = state.findIndex(i => i.id === id);
        state[x] = address;
    } else {
        state.push(address);
    }
}

export const addressesReducer = createReducer([], {
    ADD_ALL_ADDRESSES: addAllAddresses,
    ADD_OR_UPDATE_ADDRESS: addOrUpdateAddress
  })
