import React from "react";
import { connect } from "react-redux";
import { Col, DropdownButton, Form, InputGroup, Row } from "react-bootstrap";

import * as actions from "../../../store/actions/taxCalculator";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const pension = (props) => (
  <Row>
    <Col xs={12} md={6}>
      <label htmlFor="pension">Enter any pension contributions:</label>
    </Col>
    <Col xs={12} md={6}>
      <InputGroup>
        {getPrependedDropdown(props)}
        <Form.Control id="pension" type="number" onChange={(event) => setPension(event, props)} />
        {getAppendedDropdown(props)}
      </InputGroup>
    </Col>
  </Row>
);

const getAppendedDropdown = (props) => {
  return props.pensionType === "pounds" ? null : getDropdown(props, InputGroup.Append);
};

const getPrependedDropdown = (props) => {
  return props.pensionType === "percent" ? null : getDropdown(props, InputGroup.Prepend);
};

const getDropdown = (props, as) => (
  <DropdownButton as={as} id="pension-type" variant="outline-secondary" title={pensionTypeSymbol(props)}>
    <DropdownItem eventKey="percent" active={props.pensionType === "percent"} onSelect={(eventKey) => props.setPensionType(eventKey)}>
      %
    </DropdownItem>
    <DropdownItem eventKey="pounds" active={props.pensionType === "pounds"} onSelect={(eventKey) => props.setPensionType(eventKey)}>
      £
    </DropdownItem>
  </DropdownButton>
);

const pensionTypeSymbol = (props) => {
  return props.pensionType === "percent" ? "%" : "£";
};

const setPension = (event, props) => {
  const rawPension = event.target.value;
  props.setPension(rawPension === "" ? 0 : parseFloat(rawPension));
};

const mapStateToProps = (state) => {
  return {
    pensionType: state.input.pensionType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPension: (pension) => dispatch(actions.setPension(pension)),
    setPensionType: (pensionType) => dispatch(actions.setPensionType(pensionType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(pension);
