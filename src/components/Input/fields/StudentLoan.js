import React from "react";
import { Col, Row, FormCheck, FormLabel, FormGroup } from "react-bootstrap";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/taxCalculator";

const UndergraduateLoan = (props) => (
  <Row>
    <Col xs={12} md={6}>
      <FormLabel htmlFor="studentLoan">Select student loans to repay:</FormLabel>
    </Col>
    <Col xs={12} md={6}>
      <FormGroup id="studentLoan">
        <FormCheck size="lg" id="undergradLoan" onChange={(event) => props.setUndergradLoan(event.target.checked)} label="Type 2 undergraduate" />
        <FormCheck size="lg" id="postgradLoan" onChange={(event) => props.setPostgradLoan(event.target.checked)} label="Postgraduate" />
      </FormGroup>
    </Col>
  </Row>
);

const mapDispatchToProps = (dispatch) => {
  return {
    setUndergradLoan: (undergradLoan) => dispatch(actions.setUndergradLoan(undergradLoan)),
    setPostgradLoan: (postgradLoan) => dispatch(actions.setPostgradLoan(postgradLoan)),
  };
};

export default connect(null, mapDispatchToProps)(UndergraduateLoan);
