import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/taxCalculator'

const pension = (props) => (
    <div>
        <label
            htmlFor="pension">Enter any pension contributions:</label>
        <input
            id="pension"
            style={{ margin: "10px" }}
            type="number"
            onChange={event => setPension(event, props)} />
        <input
            type="radio"
            id="percent"
            name="pensionType"
            onChange={event => setPensionType(event, props)}
            defaultChecked />
        <label
            htmlFor="percent">%</ label>
        <input
            type="radio"
            id="pounds"
            name="pensionType"
            onChange={event => setPensionType(event, props)} />
        <label
            htmlFor="pounds">£ / year</ label>
    </div>
)

const setPension = (event, props) => {
    const rawPension = event.target.value
    props.setPension(rawPension === '' ? 0 : parseFloat(rawPension))
}

const setPensionType = (event, props) => {
    props.setPensionType(event.target.id)
}


const mapDispatchToProps = dispatch => {
    return {
        setPension: (pension) => dispatch(actions.setPension(pension)),
        setPensionType: (pensionType) => dispatch(actions.setPensionType(pensionType))
    }
}

export default connect(null, mapDispatchToProps)(pension);