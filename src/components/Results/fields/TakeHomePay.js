import React from 'react';
import { connect } from 'react-redux';
import { selectTakeHomePay } from '../../../store/reducers/selector';

const takeHomePay = (props) => (
    <p>
        Your net income is: £{props.income.toFixed(2)}
    </p>
)

const mapStatetoProps = state => {
    return {
        income: selectTakeHomePay(state)
    }
}

export default connect(mapStatetoProps)(takeHomePay);