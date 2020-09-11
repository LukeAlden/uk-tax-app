import React from 'react'

import Input from '../Input/Input'
import Results from '../Results/Results'

import classes from './TaxCalculator.module.css'

const TaxCalculator = () => (
    <div className={classes.TaxCalculator}>
        <h3>UK Tax Calculator:</h3>
        <hr />
        <Input />
        <hr />
        <Results />
    </div>
)

export default TaxCalculator