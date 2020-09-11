import React from 'react';
import { connect } from 'react-redux';
import { selectPensionDeduction } from '../../../store/reducers/selector';

const pensionDeduction = (props) => (
    <p>
        Your pension contributions equal: £{parseFloat(props.pensionDeduction).toFixed(2)}
    </p>
)

const mapStatetoProps = state => {
    return {
        pensionDeduction: selectPensionDeduction(state)
    }
}

export default connect(mapStatetoProps)(pensionDeduction);