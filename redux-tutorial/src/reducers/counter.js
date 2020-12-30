const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload * 2
        case 'DECREMENT':
            return state - action.payload * 2
        default:
            return state
    }
}

export default counterReducer;