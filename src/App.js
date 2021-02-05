import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

import "./App.css";
import TaxCalculator from "./components/TaxCalculator/TaxCalculator";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar variant="light" bg="light" sticky="top">
          <Navbar.Brand>UK Tax Calculator</Navbar.Brand>
        </Navbar>
        <br/>
        <TaxCalculator />
      </div>
    );
  }
}

export default App;
