import React from 'react';
import { connect } from 'react-redux';
import { selectTakeHomePay } from '../../../store/reducers/selector';

const takeHomePay = (props) => (
    <div>
        Your net income is: £{props.income.toFixed(2)}
    </div>
)

const mapStatetoProps = state => {
    return {
        income: selectTakeHomePay(state)
    }
}

export default connect(mapStatetoProps)(takeHomePay);