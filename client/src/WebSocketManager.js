import { addAllIndividuals } from "./Individuals";

export const connectSocket = store => {
    let ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = m => {
      const message = JSON.parse(m.data);
      console.log(message);
      store.dispatch(addAllIndividuals(message.individuals));
    }
}