
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
            break;

        case 'DEC':
            return state - 1;
            break;
        case 'RES':
            return state = 0;
            break;
        default:
            return state;

    }
}

export default reducer;