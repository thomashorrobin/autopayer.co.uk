import WebSocket from "ws";
import { generateData } from "./example_data";
import { generateSchedualledMonthlyPayments, generateSchedualledWeeklyPayments } from "./schedualedPayments.mjs";
 
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
const REQUEST_SCHEDUALED_PAYMENTS = 'REQUEST_SCHEDUALED_PAYMENTS';
const ADD_SCHEDUALED_PAYMENTS_TO_LEASE = 'ADD_SCHEDUALED_PAYMENTS_TO_LEASE';

async function processAction(action, ws) {
  const { type, payload } = action;
  const send = data => { 
    ws.send(JSON.stringify(data));
    console.log('sent: %s', JSON.stringify(data));
  }
  switch (type) {
    case GET_ALL_DATA:
        let data = await generateData();
        send(createIndividuals(data.individuals));
        send(createLeases(data.leases));
        send(createAddresses(data.addresses));
      break;
    case UPDATE_INDIVIDUAL:
      console.log('got here');
      console.log(wss.clients.size);
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(createUpdateIndividual(payload)));
        }
      });
    case REQUEST_SCHEDUALED_PAYMENTS:
      const { frequency } = payload;
      switch (frequency) {
        case 'weekly':
          const schedualedWeeklyPayments = await generateSchedualledWeeklyPayments(payload);
          send(createAddSchedualedPaymentsToLease(payload.id, schedualedWeeklyPayments));
          break;
        case 'monthly':
          const schedualedMonthlyPayments = await generateSchedualledMonthlyPayments(payload);
          send(createAddSchedualedPaymentsToLease(payload.id, schedualedMonthlyPayments));
          break;
      
        default:
          break;
      }
      break;
    default:
      break;
  }
}

function createAddSchedualedPaymentsToLease(leaseId, schedualedPayments) {
  return {
    type: ADD_SCHEDUALED_PAYMENTS_TO_LEASE,
    id: leaseId,
    payload: schedualedPayments
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