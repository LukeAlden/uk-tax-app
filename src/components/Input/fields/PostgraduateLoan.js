import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/taxCalculator'

const postgraduateLoan = (props) => (
    <div>
        <label htmlFor="postgradLoan">Do you have a postgraduate loan?</label>
        <input
            id="postgradLoan"
            style={{ margin: "10px" }}
            type="checkbox"
            onChange={event => props.setPostgradLoan(event.target.checked)} />
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        setPostgradLoan: (postgradLoan) => dispatch(actions.setPostgradLoan(postgradLoan))
    }
}

export default connect(null, mapDispatchToProps)(postgraduateLoan);