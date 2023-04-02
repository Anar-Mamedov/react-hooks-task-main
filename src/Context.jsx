import { createContext } from 'react';

const _items = [
    {
        id: 1,
        title: "Alma",
        status: true
    },
    {
        id: 2,
        title: "Armud",
        status: false
    }
];

const _setItems = (state, action) => {
    switch (action.name) {
        case 'ADD': return [...state, { id: state.length + 1, status: false, title: action.value }];
        case 'CHECKED': return state.map(val => val.id !== action.id ? val : { ...val, status: true });
        case 'UNCHECKED': return state.map(val => val.id !== action.id ? val : { ...val, status: false });
        default: return state;
    }
}

const ItemContext = createContext();

export { _items, _setItems };
export default ItemContext;
