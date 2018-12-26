import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const individuals = this.props.individuals.map(i => <li key={i.id}>{ i.firstName }</li>);
    return (
      <div className="App">
        <ul>
          { individuals }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      individuals: state.individuals
    }
  }
)(App);