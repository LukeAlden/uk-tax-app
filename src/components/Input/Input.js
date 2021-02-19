import React from "react";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import BaseIncome from "./fields/BaseIncome";
import Pension from "./fields/Pension";
import StudentLoan from "./fields/StudentLoan";

import * as actions from "../../store/actions/taxCalculator";
import ExtraInput from "./fields/ExtraInput";

const Input = (props) => (
  <Form onSubmit={(event) => submit(event, props)}>
    {/* Button to allow submitting form with enter key */}
    <button class="hidden" type="submit">
      Submit
    </button>
    <BaseIncome />
    <Pension />
    <StudentLoan />
    <ExtraInput />
    <Button variant="success" size="lg" block onClick={(event) => submit(event, props)}>
      Calculate Tax
    </Button>
  </Form>
);

const submit = (event, props) => {
  event.preventDefault();
  props.onSubmit();
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => dispatch(actions.renderResults(true)),
  };
};

export default connect(null, mapDispatchToProps)(Input);
