import React from 'react';
import { connect } from 'react-redux';

import * as selector from '../../store/reducers/selector';

const results = (props) => {
    if (!props.shouldRenderResults) {
        return getResultsPlaceholder()
    } else {
        return getResults(props);
    }
}

const getResultsPlaceholder = () => (
    <div>
        <h4>Fill in the form and submit to get your results!</h4>
    </div>
)

const getResults = (props) => (
    <div>
        <p>Your net income is: £{props.takeHomePay.toFixed(2)}</p>
        <p>Income tax paid: £{props.incomeTax.toFixed(2)}</p>
        <p>National insurance paid: £{props.nationalInsurance.toFixed(2)}</p>
        <p>Your pension contributions equal: £{parseFloat(props.pensionDeduction).toFixed(2)}</p>
        <p>Your undergraduate loan repayment is: £{props.undergradPayment.toFixed(2)}</p>
        <p>Your postgraduate loan repayment is: £{props.postgradPayment.toFixed(2)}</p>
        <p>*These results were calculated after making a number of assumptions and are in no way guaranteed to be accurate.</p>
    </div>
)

const mapStateToProps = state => {
    return {
        shouldRenderResults: state.shouldRenderResults,
        takeHomePay: selector.selectTakeHomePay(state),
        incomeTax: selector.selectIncomeTax(state),
        nationalInsurance: selector.selectNationalInsurance(state),
        pensionDeduction: selector.selectPensionDeduction(state),
        undergradPayment: selector.selectUndergradPayment(state),
        postgradPayment: selector.selectPostgradPayment(state)
    }
}

export default connect(mapStateToProps)(results);