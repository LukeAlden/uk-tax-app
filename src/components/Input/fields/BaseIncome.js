import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";

import * as actions from "../../../store/actions/taxCalculator";
import { Col, FormLabel, InputGroup, Row } from "react-bootstrap";

const baseIncome = (props) => (
  <Row>
    <Col xs={12} md={6}>
      <FormLabel htmlFor="income">Enter your annual income:</FormLabel>
    </Col>
    <Col xs={12} md={6}>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>£</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control id="income" type="number" min="0" onChange={(event) => setIncome(event, props)} />
      </InputGroup>
    </Col>
  </Row>
);

const setIncome = (event, props) => {
  const rawIncome = event.target.value;
  props.setIncome(rawIncome === "" ? 0 : parseFloat(rawIncome));
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIncome: (income) => dispatch(actions.setIncome(income)),
  };
};

export default connect(null, mapDispatchToProps)(baseIncome);
