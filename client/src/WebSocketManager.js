export const connectSocket = store => {
    let ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = m => {
      store.dispatch(JSON.parse(m.data));
    }
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: GET_ALL_DATA }));
    }
}

const GET_ALL_DATA = 'GET_ALL_DATA';
