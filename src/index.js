import { createStore } from "redux";

const incBtn = document.querySelector('#inc'),
    decBtn = document.querySelector('#dec'),
    resBtn = document.querySelector('#res'),
    counter = document.querySelector('#counter');

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

const store = createStore(reducer);

store.subscribe(() => {
    counter.textContent = store.getState();
})

// ActionCreator

const inc = () => ({ type: 'INC' });

const dec = () => ({ type: 'DEC' });

const res = () => ({ type: 'RES' });


incBtn.addEventListener('click', () => {
    store.dispatch(inc());
})


decBtn.addEventListener('click', () => {
    store.dispatch(dec());
})

resBtn.addEventListener('click', () => {
    store.dispatch(res());
})
