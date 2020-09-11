import React from 'react';
import { connect } from 'react-redux';
import { selectPensionDeduction } from '../../../store/reducers/selector';

const pensionDeduction = (props) => (
    <div>
        Your pension contributions equal: £{parseFloat(props.pensionDeduction).toFixed(2)}
    </div>
)

const mapStatetoProps = state => {
    return {
        pensionDeduction: selectPensionDeduction(state)
    }
}

export default connect(mapStatetoProps)(pensionDeduction);