import React from 'react';
import { connect } from 'react-redux';

import BaseIncome from './fields/BaseIncome'
import Pension from './fields/Pension'
import UndergraduateLoan from './fields/UndergraduateLoan'
import PostgraduateLoan from './fields/PostgraduateLoan'

import * as actions from '../../store/actions/taxCalculator'
import ExtraInput from './fields/ExtraInput';

const Input = (props) => (
    <div>
        <form onSubmit={event => submit(event, props)}>
            <button type="submit" style={{ display: "none" }}>Submit</button>
            <BaseIncome />
            <Pension />
            <UndergraduateLoan />
            <PostgraduateLoan />
            <ExtraInput />
        </form>
        <button
            style={{ margin: "10px" }}
            onClick={event => submit(event, props)}>Calculate Tax!</button>
    </div>
)


const submit = (event, props) => {
    event.preventDefault();
    props.onSubmit();
}


const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(actions.renderResults(true))
    }
}

export default connect(null, mapDispatchToProps)(Input)