import { connect } from "react-redux"
import React from 'react'
import { selectNationalInsurance } from '../../../store/reducers/selector'

const nationalInsurance = (props) => {
    return (
        <p>
            National insurance paid: £{props.nationalInsurance}
        </p>
    )
}

const mapStateToProps = state => {
    return {
        nationalInsurance: selectNationalInsurance(state)
    }
}

export default connect(mapStateToProps)(nationalInsurance)