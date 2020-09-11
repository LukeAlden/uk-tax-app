import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/taxCalculator';

const baseIncome = (props) => (
    <div>
        Enter your annual income: £
        <input
            style={{ margin: "10px" }}
            type="number"
            min="0"
            onChange={event => setIncome(event, props)} />
    </div>
)

const setIncome = (event, props) => {
    const rawIncome = event.target.value
    props.setIncome(rawIncome === '' ? 0 : parseFloat(rawIncome))
}

const mapDispatchToProps = dispatch => {
    return {
        setIncome: (income) => dispatch(actions.setIncome(income))
    }
}

export default connect(null, mapDispatchToProps)(baseIncome);