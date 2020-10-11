import React, { Component } from 'react';
import { connect } from 'react-redux';

import BaseIncome from './fields/BaseIncome'
import Pension from './fields/Pension'
import UndergraduateLoan from './fields/UndergraduateLoan'
import PostgraduateLoan from './fields/PostgraduateLoan'

import * as actions from '../../store/actions/taxCalculator'
import ExtraInput from './fields/ExtraInput';

class Input extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <button type="submit" style={{ display: "none" }}>Submit</button>
                    <BaseIncome />
                    <Pension />
                    <UndergraduateLoan />
                    <PostgraduateLoan />
                    <ExtraInput />
                </form>
                <button
                    style={{ margin: "10px" }}
                    onClick={this.submit}>Calculate Tax!</button>
            </div>
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