import { connect } from "react-redux"
import React from 'react'
import { selectIncomeTax } from '../../../store/reducers/selector'

const incomeTax = (props) => {
    return (
        <div>
            Income tax paid: £{props.incomeTax}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        incomeTax: selectIncomeTax(state)
    }
}

export default connect(mapStateToProps)(incomeTax)