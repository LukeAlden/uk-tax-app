import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/taxCalculator';

class ExtraInput extends Component {

    constructor() {
        super()
        this.state = {
            extraInput: [
                {
                    id: new Date().getUTCMilliseconds(),
                    amount: 0,
                    deductionType: "percent",
                    pretax: false
                }
            ]
        }
    }

    addExtraField = (event) => {
        event.preventDefault();
        this.setState((state, props) => ({
            extraInput: state.extraInput.concat({
                id: new Date().getUTCMilliseconds(),
                amount: 0,
                deductionType: "percent",
                pretax: false
            })
        }))
    }

    removeExtraField = (event, id) => {
        event.preventDefault();
        this.setState((state, props) => ({
            extraInput: state.extraInput.filter(input => input.id !== id)
        }))
    }

    amountChanged = (event, id) => {
        console.log("amountChanged()")
        const amount = event.target.value
        this.setState((state, props) => ({
            extraInput: state.extraInput.map((input) => {
                if (input.id !== id) {
                    return input;
                }
                return {
                    ...input,
                    amount: amount
                }
            })

        }))
    }

    deductionTypeChanged = (event, id) => {
        console.log("amountChanged()")
        const deductionType = event.target.id
        this.setState((state, props) => ({
            extraInput: state.extraInput.map((input) => {
                if (input.id !== id) {
                    return input;
                }
                return {
                    ...input,
                    deductionType: deductionType
                }
            })

        }))
    }

    pretaxChanged = (event, id) => {
        console.log("amountChanged()")
        const pretax = event.target.checked
        this.setState((state, props) => ({
            extraInput: state.extraInput.map((input) => {
                if (input.id !== id) {
                    return input;
                }
                return {
                    ...input,
                    pretax: pretax
                }
            })

        }))
    }

    render() {
        console.log(this.state)
        const extraInput = this.state.extraInput.map(input => (
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
                    onChange={event => this.amountChanged(event, input.id)} />
                <input
                    type="radio"
                    id="percent"
                    name={input.id + "deductionType"}
                    onChange={event => this.deductionTypeChanged(event, input.id)}
                    defaultChecked />
                <label
                    htmlFor="percent">%</ label>
                <input
                    type="radio"
                    id="pounds"
                    name={input.id + "deductionType"}
                    onChange={event => this.deductionTypeChanged(event, input.id)} />
                <label
                    htmlFor="pounds">£ / year</ label>
                <input
                    id="pretax"
                    style={{ margin: "10px" }}
                    type="checkbox"
                    onChange={event => this.pretaxChanged(event, input.id)} />
                <label htmlFor="pretax">Pretax</label>
                <button
                    onClick={event => this.removeExtraField(event, input.id)}
                    style={{ margin: "10px" }}>Remove</button>
            </li>
        ))

        return (
            <div>
                <p>Additional Deductions:</p>
                <ul>{extraInput}</ul>
                <button
                    style={{ margin: "10px" }}
                    onClick={this.addExtraField}
                    onMouseDown={e => e.preventDefault()}>Add Deduction</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIncome: (income) => dispatch(actions.setIncome(income))
    }
}

export default connect(null, mapDispatchToProps)(ExtraInput);