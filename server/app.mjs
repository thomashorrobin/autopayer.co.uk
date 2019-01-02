import WebSocket from "ws";
import { generateData } from "./example_data";
 
const wss = new WebSocket.Server({ port: 8080 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    processAction(JSON.parse(message), ws);
  });
});

const GET_ALL_DATA = 'GET_ALL_DATA';
const ADD_ALL_INDIVIDUALS = 'ADD_ALL_INDIVIDUALS';
const ADD_ALL_LEASES = 'ADD_ALL_LEASES';
const ADD_ALL_ADDRESSES = 'ADD_ALL_ADDRESSES';
const UPDATE_INDIVIDUAL = 'UPDATE_INDIVIDUAL';

async function processAction(action, ws) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_DATA:
        let data = await generateData();
        ws.send(JSON.stringify(createIndividuals(data.individuals)));
        ws.send(JSON.stringify(createLeases(data.leases)));
        ws.send(JSON.stringify(createAddresses(data.addresses)));
      break;
    case UPDATE_INDIVIDUAL:
      console.log('got here');
      console.log(wss.clients.size);
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(createUpdateIndividual(payload)));
        }
      });
    default:
      break;
  }
}


function createUpdateIndividual(individual) {
  return {
    type: UPDATE_INDIVIDUAL,
    id: individual.id,
    payload: {
      individual
    }
  }
}

function createIndividuals(individuals) {
  return {
    type: ADD_ALL_INDIVIDUALS,
    payload: {
      individuals
    }
  }
}

function createLeases(leases) {
  return {
    type: ADD_ALL_LEASES,
    payload: {
      leases
    }
  }
}

function createAddresses(addresses) {
  return {
    type: ADD_ALL_ADDRESSES,
    payload: {
      addresses
    }
  }
}