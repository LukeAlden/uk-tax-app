import React from 'react';
import { connect } from 'react-redux';

import TakeHomePay from './fields/TakeHomePay';
import PensionDeduction from './fields/PensionDeduction';
import IncomeTax from './fields/IncomeTax';
import UndergradPayment from './fields/UndergradPayment';
import PostgradPayment from './fields/PostgradPayment';
import NationalInsurance from './fields/NationalInsurance';

const results = (props) => {
    if (!props.shouldRenderResults) {
        return (
            <div>
                <h4>Fill in the form and submit to get your results!</h4>
            </div>
        )
    }
    return (
        <div>
            <h4>Your results:</h4>
            <TakeHomePay />
            <IncomeTax />
            <NationalInsurance />
            <PensionDeduction />
            <UndergradPayment />
            <PostgradPayment />
            {disclaimer()}
        </div>
    );
}

const disclaimer = () => (
    <p>*These results were calculated after making a number of assumptions and are in no way guaranteed to be accurate.</p>
)

const mapStateToProps = state => {
    return {
        shouldRenderResults: state.shouldRenderResults,
        income: state.income
    }
}

export default connect(mapStateToProps)(results);