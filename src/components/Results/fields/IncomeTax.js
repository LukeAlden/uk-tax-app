import { connect } from "react-redux"
import React from 'react'
import { selectIncomeTax } from '../../../store/reducers/selector'

const incomeTax = (props) => {
    return (
        <p>
            Income tax paid: £{props.incomeTax}
        </p>
    )
}

const mapStateToProps = state => {
    return {
        incomeTax: selectIncomeTax(state)
    }
}

export default connect(mapStateToProps)(incomeTax)