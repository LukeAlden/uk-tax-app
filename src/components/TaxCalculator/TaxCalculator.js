import React from "react";
import { Container } from "react-bootstrap";

import Input from "../Input/Input";
import Results from "../Results/Results";

const TaxCalculator = () => (
  <Container>
    <Input />
    <hr />
    <Results />
  </Container>
);

export default TaxCalculator;