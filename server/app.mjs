import WebSocket from "ws";
import { generateData } from "./example_data";
 
const wss = new WebSocket.Server({ port: 8080 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message);
  });
 
  returnAllData(ws);
});

async function returnAllData(ws) {
  ws.send(JSON.stringify(await generateData()));
}