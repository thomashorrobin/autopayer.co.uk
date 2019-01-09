import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { SevenColumnCalendar } from "./SevenColumnCalendar";

class App extends Component {
  render() {
    const individuals = this.props.individuals.map(i => <li key={i.id}>{ i.firstName }</li>);
    const addresses = this.props.addresses.map(i => <li key={i.id}>{ i.address }</li>);
    const leases = this.props.leases.map(i => <li key={i.id}>{ i.schedualedPayments.length }</li>);
    const grids = this.props.leases.filter(l => l.schedualedPayments.length > 0).map(l => <SevenColumnCalendar key={ l.id } schedualedPayments={l.schedualedPayments} />);
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
        <div className="sevenDayCalendarContainer">
          {grids}
        </div>
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