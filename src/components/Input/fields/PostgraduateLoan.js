import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/taxCalculator'

const postgraduateLoan = (props) => (
    <div>
        Do you have a postgraduate loan?
        <input
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