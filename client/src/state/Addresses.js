import { createReducer } from 'redux-starter-kit';

function addAllAddressesReducer(state, action) {
    const { addresses } = action.payload;
    return state.concat(addresses);
}

function addOrUpdateAddressReducer(state, action) {
    const { id, address } = action.payload

    if (state.some(i => i.id === id)) {
        const x = state.findIndex(i => i.id === id);
        state[x] = address;
    } else {
        state.push(address);
    }
}

export const ADD_ALL_ADDRESSES = 'ADD_ALL_ADDRESSES';

export const addressesReducer = createReducer([], {
    ADD_ALL_ADDRESSES: addAllAddressesReducer,
    ADD_OR_UPDATE_ADDRESS: addOrUpdateAddressReducer
  })

export const addAllAddress = addresses => {
    return {
        type: ADD_ALL_ADDRESSES,
        payload: { addresses }
    }
}