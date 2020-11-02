import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/taxCalculator';
import { selectExtraInputs } from '../../../store/reducers/selector';

const addExtraField = (event, props) => {
    event.preventDefault();
    props.setExtraInput(
        props.extraInput.concat({
            id: "extraInput-" + new Date().getUTCMilliseconds(),
            amount: null,
            deductionType: "percent",
            pretax: false
        })
    )
}

const removeExtraField = (event, id, props) => {
    event.preventDefault();
    props.setExtraInput(
        props.extraInput.filter(input => input.id !== id)
    )
}

const amountChanged = (event, id, props) => {
    const amount = event.target.value
    props.setExtraInput(
        props.extraInput.map((input) => {
            if (input.id !== id) {
                return input;
            }
            return {
                ...input,
                amount: parseFloat(amount)
            }
        })
    )
}

const deductionTypeChanged = (event, id, props) => {
    const deductionType = event.target.id
    props.setExtraInput(
        props.extraInput.map((input) => {
            if (input.id !== id) {
                return input;
            }
            return {
                ...input,
                deductionType: deductionType
            }
        })
    )
}

const pretaxChanged = (event, id, props) => {
    const pretax = event.target.checked
    props.setExtraInput(
        props.extraInput.map((input) => {
            if (input.id !== id) {
                return input;
            }
            return {
                ...input,
                pretax: pretax
            }
        })
    )
}

const ExtraInput = props => {
    const extraInput = props.extraInput.map(input => (
        <li
            key={input.id}
            style={{ listStyleType: "none" }}>
            <label
                htmlFor={input.id}>Amount:</label>
            <input
                id={input.id}
                style={{ margin: "10px" }}
                type="number"
                min="0"
                value={input.amount}
                onChange={event => amountChanged(event, input.id, props)} />
            <input
                type="radio"
                id="percent"
                name={input.id + "deductionType"}
                onChange={event => deductionTypeChanged(event, input.id, props)}
                defaultChecked />
            <label
                htmlFor="percent">%</ label>
            <input
                type="radio"
                id="pounds"
                name={input.id + "deductionType"}
                onChange={event => deductionTypeChanged(event, input.id, props)} />
            <label
                htmlFor="pounds">£ / year</ label>
            <input
                id="pretax"
                style={{ margin: "10px" }}
                type="checkbox"
                onChange={event => pretaxChanged(event, input.id, props)} />
            <label htmlFor="pretax">Pretax</label>
            <button
                onClick={event => removeExtraField(event, input.id, props)}
                style={{ margin: "10px" }}>Remove</button>
        </li>
    ))

    return (
        <div>
            <p>Additional Deductions:</p>
            <ul>{extraInput}</ul>
            <button
                style={{ margin: "10px" }}
                onClick={event => addExtraField(event, props)}
                onMouseDown={e => e.preventDefault()}>Add Deduction</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        extraInput: selectExtraInputs(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIncome: (income) => dispatch(actions.setIncome(income)),
        setExtraInput: (extraInput) => dispatch(actions.setExtraInput(extraInput))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ExtraInput);