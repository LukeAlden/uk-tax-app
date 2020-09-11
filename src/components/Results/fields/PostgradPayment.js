import React from 'react';
import { connect } from 'react-redux';
import { selectPostgradPayment } from '../../../store/reducers/selector';

const postgradPayment = (props) => (
    <p>
        Your postgraduate loan repayment is: £{props.postgradPayment.toFixed(2)}
    </p>
)

const mapStatetoProps = state => {
    return {
        postgradPayment: selectPostgradPayment(state)
    }
}

export default connect(mapStatetoProps)(postgradPayment);