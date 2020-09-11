import React from 'react';
import { connect } from 'react-redux';
import { selectUndergradPayment } from '../../../store/reducers/selector';

const undergradPayment = (props) => (
    <div>
        Your undergraduate loan repayment is: £{props.undergradPayment.toFixed(2)}
    </div>
)

const mapStatetoProps = state => {
    return {
        undergradPayment: selectUndergradPayment(state)
    }
}

export default connect(mapStatetoProps)(undergradPayment);