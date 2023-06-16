export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case 'ADD':
            throw new Error(`La accion "${action.type}" aun no esta implementada`);

        default:
            return initialState;
    }
}