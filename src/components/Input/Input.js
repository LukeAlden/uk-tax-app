import React, { Component } from 'react';
import { connect } from 'react-redux';

import BaseIncome from './fields/BaseIncome'
import Pension from './fields/Pension'
import UndergraduateLoan from './fields/UndergraduateLoan'
import PostgraduateLoan from './fields/PostgraduateLoan'

import * as actions from '../../store/actions/taxCalculator'

import classes from './Input.module.css'

class Input extends Component {
    render() {
        return (
            <form onSubmit={this.submit}>
                {/* can you use a single form for the input */}
                <BaseIncome />
                <Pension />
                <UndergraduateLoan />
                <PostgraduateLoan />
                <input type="submit" value="Calculate Tax!" />
            </form>
        )
    }

    submit = (event) => {
        event.preventDefault();
        this.props.onSubmit();
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(actions.renderResults(true))
    }
}

export default connect(null, mapDispatchToProps)(Input)