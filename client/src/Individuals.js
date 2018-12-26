import { createReducer } from 'redux-starter-kit';

function addAllIndividualsReducer(state, action) {

    console.log(action);
    const { individuals } = action.payload

    return state.concat(individuals);
}

function addOrUpdateIndividualReducer(state, action) {
    const { id, individual } = action.payload

    if (state.some(i => i.id === id)) {
        const x = state.findIndex(i => i.id === id);
        state[x] = individual;
    } else {
        state.push(individual);
    }

    return state;
}

export const individualsReducer = createReducer([], {
    ADD_ALL_INDIVIDUALS: addAllIndividualsReducer,
    ADD_OR_UPDATE_INDIVIDUAL: addOrUpdateIndividualReducer
  })

export const ADD_ALL_INDIVIDUALS = 'ADD_ALL_INDIVIDUALS';

export const addAllIndividuals = individuals => {
    return {
        type: ADD_ALL_INDIVIDUALS,
        payload: { individuals }
    }
}
