import { connect } from "react-redux"
import React from 'react'
import { selectNationalInsurance } from '../../../store/reducers/selector'

const nationalInsurance = (props) => {
    return (
        <div>
            National insurance paid: £{props.nationalInsurance}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nationalInsurance: selectNationalInsurance(state)
    }
}

export default connect(mapStateToProps)(nationalInsurance)