import React from 'react';
import { connect } from 'react-redux';
import { selectUndergradPayment } from '../../../store/reducers/selector';

const undergradPayment = (props) => (
    <p>
        Your undergraduate loan repayment is: £{props.undergradPayment.toFixed(2)}
    </p>
)

const mapStatetoProps = state => {
    return {
        undergradPayment: selectUndergradPayment(state)
    }
}

export default connect(mapStatetoProps)(undergradPayment);