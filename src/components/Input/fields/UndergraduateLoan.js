import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/taxCalculator'

const UndergraduateLoan = (props) => (
    <div>
        <label htmlFor="undergradLoan">Do you have a type 2 undergrauate loan?</label>
        <input
            id="undergradLoan"
            style={{ margin: "10px" }}
            type="checkbox"
            onChange={event => props.setUndergradLoan(event.target.checked)} />
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        setUndergradLoan: (undergradLoan) => dispatch(actions.setUndergradLoan(undergradLoan))
    }
}

export default connect(null, mapDispatchToProps)(UndergraduateLoan);