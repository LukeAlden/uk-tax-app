import * as actionTypes from '../actions/actionTypes';

export const renderResults = (shouldRender) => {
    return {
        type: actionTypes.RENDER_RESULTS,
        value: shouldRender
    }
}

export const setIncome = (income) => {
    return {
        type: actionTypes.SET_INCOME,
        income: income
    }
}

export const setPension = (pension) => {
    return {
        type: actionTypes.SET_PENSION,
        pension: pension
    }
}

export const setPensionType = (pensionType) => {
    return {
        type: actionTypes.SET_PENSION_TYPE,
        pensionType: pensionType
    }
}

export const setUndergradLoan = (undergradLoan) => {
    return {
        type: actionTypes.SET_UNDERGRAD_LOAN,
        undergradLoan: undergradLoan
    }
}

export const setPostgradLoan = (postgradLoan) => {
    return {
        type: actionTypes.SET_POSTGRAD_LOAN,
        postgradLoan: postgradLoan
    }
}

export const setExtraInput = (extraInput) => {
    return {
        type: actionTypes.SET_EXTRA_INPUT,
        extraInput: extraInput
    }
}