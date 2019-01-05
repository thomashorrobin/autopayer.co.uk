import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const individuals = this.props.individuals.map(i => <li key={i.id}>{ i.firstName }</li>);
    const addresses = this.props.addresses.map(i => <li key={i.id}>{ i.address }</li>);
    const leases = this.props.leases.map(i => <li key={i.id}>{ i.schedualedPayments.length }</li>);
    return (
      <div className="App">
        <ul>
          { individuals }
        </ul>
        <ul>
          { addresses }
        </ul>
        <ul>
          { leases }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      individuals: state.individuals,
      addresses: state.addresses,
      leases: state.leases
    }
  }
)(App);