const tax = {
    allowance: 12570,
    basicRate: 0.2,
    lowerThreshold: 50270,
    higherRate: 0.4,
    higherThreshold: 150000,
    additionalRate: 0.45
}

const nationalInsurance = {
    allowance: 12576,
    lowerRate: 0.1325,
    threshold: 50268,
    higherRate: 0.0325
}

const studentLoan = {
    ug: {
        threshold: 27248,
        rate: 0.09
    },
    pg: {
        threshold: 20956,
        rate: 0.06
    }
}

// we can eventually use Reselect here for performance optimisation

export const selectTakeHomePay = (state) => {
    const withoutExtraPostTaxDeductions = selectTaxableIncome(state)
        - selectIncomeTax(state)
        - selectNationalInsurance(state)
        - selectUndergradPayment(state)
        - selectPostgradPayment(state)

        return withoutExtraPostTaxDeductions - extraPostTaxDeduction(state, withoutExtraPostTaxDeductions)
}

export const selectTaxableIncome = (state) => {
    return state.input.income - selectPensionDeduction(state) - extraPreTaxDeduction(state)
}

export const selectIncomeTax = (state) => {
    const basicRateIncome = Math.min(Math.max(selectTaxableIncome(state) - tax.allowance, 0), tax.lowerThreshold - tax.allowance)
    const basicRateTax = basicRateIncome * tax.basicRate

    const higherRateIncome = Math.min(Math.max(selectTaxableIncome(state) - tax.lowerThreshold, 0), tax.higherThreshold - tax.lowerThreshold)
    const higherRateTax = higherRateIncome * tax.higherRate

    const additionalRateIncome = Math.max(selectTaxableIncome(state) - tax.higherThreshold, 0)
    const additionalRateTax = additionalRateIncome * tax.additionalRate

    return basicRateTax + higherRateTax + additionalRateTax
}

export const selectNationalInsurance = (state) => {
    const lowerRateIncome = Math.min(Math.max(state.input.income - nationalInsurance.allowance, 0), nationalInsurance.threshold - nationalInsurance.allowance)
    const lowerRateTax = lowerRateIncome * nationalInsurance.lowerRate

    const higherRateIncome = Math.max(state.input.income - nationalInsurance.threshold, 0)
    const higherRateTax = higherRateIncome * nationalInsurance.higherRate

    return lowerRateTax + higherRateTax
}

export const selectPensionDeduction = (state) => {
    if (state.input.pensionType === 'percent') {
        return state.input.income * state.input.pension / 100
    } else {
        return state.input.pension
    }
}

export const selectUndergradPayment = (state) => {
    return state.input.undergradLoan
        ? Math.max((selectTaxableIncome(state) - studentLoan.ug.threshold) * studentLoan.ug.rate, 0)
        : 0
}

export const selectPostgradPayment = (state) => {
    return state.input.postgradLoan
        ? Math.max((selectTaxableIncome(state) - studentLoan.pg.threshold) * studentLoan.pg.rate, 0)
        : 0
}

export const selectExtraInputs = state => {
    return state.input.extraInput
}

export const selectExtraInputsSum = state => {
    return extraPreTaxDeduction(state) + extraPostTaxDeduction(state, selectTakeHomePay(state))
}

const extraPreTaxDeduction = state => {
    const preTaxDeductions = selectExtraInputs(state).filter(deduction => deduction.pretax)
    return preTaxDeductions
        .map(deduction => calculateDeductionAmount(deduction, state.input.income))
        .reduce((acc, deduction) => acc + deduction, 0)
}

const extraPostTaxDeduction = (state, takeHomePay) => {
    const preTaxDeductions = selectExtraInputs(state).filter(deduction => !deduction.pretax)
    return preTaxDeductions
        .map(deduction => calculateDeductionAmount(deduction, takeHomePay))
        .reduce((acc, deduction) => acc + deduction, 0)
}

const calculateDeductionAmount = (deduction, effectiveIncome) => {
    if (deduction.deductionType === 'percent') {
        return (deduction.amount / 100) * effectiveIncome
    }
    return deduction.amount
}