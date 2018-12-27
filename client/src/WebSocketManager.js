import { addAllIndividuals } from "./Individuals";
import { addAllAddress } from "./Addresses";
import { addAllLeases } from "./Leases";

export const connectSocket = store => {
    let ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = m => {
      const message = JSON.parse(m.data);
      console.log(message);
      store.dispatch(addAllIndividuals(message.individuals));
      store.dispatch(addAllAddress(message.addresses));
      store.dispatch(addAllLeases(message.leases));
    }
}