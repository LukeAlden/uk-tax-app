import * as actionTypes from '../actions/actionTypes';

const initialState = {
    shouldRenderResults: false,
    input: {
        income: 0,
        pension: 0,
        pensionType: 'percent',
        undergradLoan: false,
        postgradLoan: false
    }
}

const renderResults = (state, action) => {
    return {
        ...state,
        shouldRenderResults: action.value
    }
}

const updateInput = (state, input) => {
    const newState = {
        ...state,
        input: {
            ...state.input,
            ...input
        }
    }
    // console.log(newState)
    return newState
}

const setIncome = (state, action) => {
    return updateInput(state, {income: action.income})
}

const setPension = (state, action) => {
    return updateInput(state, {pension: action.pension})
}

const setPensionType = (state, action) => {
    return updateInput(state, {pensionType: action.pensionType})
}

const setUndergradLoan = (state, action) => {
    return updateInput(state, {undergradLoan: action.undergradLoan})
}

const setPostgradLoan = (state, action) => {
    return updateInput(state, {postgradLoan: action.postgradLoan})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RENDER_RESULTS: return renderResults(state, action);
        case actionTypes.SET_INCOME: return setIncome(state, action);
        case actionTypes.SET_PENSION: return setPension(state, action);
        case actionTypes.SET_PENSION_TYPE: return setPensionType(state, action);
        case actionTypes.SET_UNDERGRAD_LOAN: return setUndergradLoan(state, action);
        case actionTypes.SET_POSTGRAD_LOAN: return setPostgradLoan(state, action);
        default:
            return state;
    }
}

export default reducer;