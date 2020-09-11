import React, { Component } from 'react';
import './App.css';
import TaxCalculator from './components/TaxCalculator/TaxCalculator';

class App extends Component {
  render() {
    return (
      <div>
        <TaxCalculator />
      </div>
    )
  }
}

export default App;