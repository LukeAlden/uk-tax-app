import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import * as selector from "../../store/reducers/selector";

import classes from "./Result.module.css";

const Results = (props) => (props.shouldRenderResults ? getResults(props) : null);

const getResults = (props) => (
  <CSSTransition
    in
    appear
    mountOnEnter
    unmountOnExit
    timeout={800}
    classNames={{
      ...classes,
    }}
  >
    <div>
      <p>Your net income is: £{props.takeHomePay.toFixed(2)}</p>
      <p>Income tax paid: £{props.incomeTax.toFixed(2)}</p>
      <p>National insurance paid: £{props.nationalInsurance.toFixed(2)}</p>
      <p>Your pension contributions equal: £{parseFloat(props.pensionDeduction).toFixed(2)}</p>
      <p>Your undergraduate loan repayment is: £{props.undergradPayment.toFixed(2)}</p>
      <p>Your postgraduate loan repayment is: £{props.postgradPayment.toFixed(2)}</p>
      <p>Your total additional reductions are: £{props.extraInputsSum.toFixed(2)}</p>
      <p>*These results were calculated after making a number of assumptions and are in no way guaranteed to be accurate.</p>
    </div>
  </CSSTransition>
);

const mapStateToProps = (state) => {
  return {
    shouldRenderResults: state.shouldRenderResults,
    takeHomePay: selector.selectTakeHomePay(state),
    incomeTax: selector.selectIncomeTax(state),
    nationalInsurance: selector.selectNationalInsurance(state),
    pensionDeduction: selector.selectPensionDeduction(state),
    undergradPayment: selector.selectUndergradPayment(state),
    postgradPayment: selector.selectPostgradPayment(state),
    extraInputsSum: selector.selectExtraInputsSum(state),
  };
};

export default connect(mapStateToProps)(Results);
