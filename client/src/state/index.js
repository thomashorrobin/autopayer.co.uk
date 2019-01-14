import { addressesReducer } from "./Addresses";
import { individualsReducer } from "./Individuals";
import { leasesReducer } from "./Leases";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
    addresses: addressesReducer,
    leases: leasesReducer,
    individuals: individualsReducer
});