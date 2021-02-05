import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { BsFillTrashFill } from "react-icons/bs";

import * as actions from "../../../store/actions/taxCalculator";
import { selectExtraInputs } from "../../../store/reducers/selector";
import { Col, Form, InputGroup, Row, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const addExtraField = (event, props) => {
  event.preventDefault();
  props.setExtraInput(
    props.extraInput.concat({
      id: "extraInput-" + new Date().getUTCMilliseconds(),
      amount: null,
      deductionType: "percent",
      pretax: false,
    })
  );
};

const removeExtraField = (event, id, props) => {
  event.preventDefault();
  props.setExtraInput(props.extraInput.filter((input) => input.id !== id));
};

const amountChanged = (event, id, props) => {
  const amount = event.target.value;
  props.setExtraInput(
    props.extraInput.map((input) => {
      if (input.id !== id) {
        return input;
      }
      return {
        ...input,
        amount: parseFloat(amount),
      };
    })
  );
};

const deductionTypeChanged = (deductionType, id, props) => {
  props.setExtraInput(
    props.extraInput.map((input) => {
      if (input.id !== id) {
        return input;
      }
      return {
        ...input,
        deductionType: deductionType,
      };
    })
  );
};

const pretaxChanged = (pretax, id, props) => {
  pretax = pretax === "Pre-tax";
  props.setExtraInput(
    props.extraInput.map((input) => {
      if (input.id !== id) {
        return input;
      }
      return {
        ...input,
        pretax: pretax,
      };
    })
  );
};

const ExtraInput = (props) => {
  const extraInput = props.extraInput.map((input) => (
    <Row key={input.id}>
      <Col xs={12}>
        <InputGroup>
          {getPrependedUnit(props, input)}
          <Form.Control id={input.id} type="number" min="0" value={input.amount || ""} onChange={(event) => amountChanged(event, input.id, props)} />
          {getAppendedUnit(props, input)}
          {getTaxDropdown(props, input)}
          {getDeleteButton(props, input)}
        </InputGroup>
      </Col>
    </Row>
  ));

  return (
    <div>
      <Row>
        <Col xs={12}>
          <p>Additional annual deductions:</p>
        </Col>
      </Row>
      {extraInput}
      <Row>
        <Button style={{ margin: "10px" }} onClick={(event) => addExtraField(event, props)} onMouseDown={(e) => e.preventDefault()}>
          Add Deduction
        </Button>
      </Row>
    </div>
  );
};

const getPrependedUnit = (props, input) => {
  return input.deductionType === "percent" ? null : getUnitsDropdown(props, input, InputGroup.Prepend);
};

const getAppendedUnit = (props, input) => {
  return input.deductionType === "pounds" ? null : getUnitsDropdown(props, input, InputGroup.Append);
};

const getUnitsDropdown = (props, input, as) => (
  <DropdownButton as={as} id="deduction-type" variant="outline-secondary" title={deductionTypeSymbol(input.deductionType)}>
    <DropdownItem eventKey="percent" active={props.pensionType === "percent"} onSelect={(eventKey) => deductionTypeChanged(eventKey, input.id, props)}>
      %
    </DropdownItem>
    <DropdownItem eventKey="pounds" active={props.pensionType === "pounds"} onSelect={(eventKey) => deductionTypeChanged(eventKey, input.id, props)}>
      £
    </DropdownItem>
  </DropdownButton>
);

const getTaxDropdown = (props, input) => (
  <DropdownButton as={InputGroup.Append} id="deduction-tax-type" variant="outline-secondary" title={input.pretax ? "Pre-tax" : "Post-tax"}>
    <DropdownItem eventKey="Post-tax" active={!input.pretax} onSelect={(eventKey) => pretaxChanged(eventKey, input.id, props)}>
      Post-tax
    </DropdownItem>
    <DropdownItem eventKey="Pre-tax" active={input.pretax} onSelect={(eventKey) => pretaxChanged(eventKey, input.id, props)}>
      Pre-tax
    </DropdownItem>
  </DropdownButton>
);

const getDeleteButton = (props, input) => (
  <InputGroup.Append>
    <Button variant="danger" onClick={(event) => removeExtraField(event, input.id, props)}>
      <BsFillTrashFill />
    </Button>
  </InputGroup.Append>
);

const deductionTypeSymbol = (deductionType) => {
  return deductionType === "percent" ? "%" : "£";
};

const mapStateToProps = (state) => {
  return {
    extraInput: selectExtraInputs(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIncome: (income) => dispatch(actions.setIncome(income)),
    setExtraInput: (extraInput) => dispatch(actions.setExtraInput(extraInput)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtraInput);
