export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case 'ADD':
            console.log(action);
            initialState = [...initialState, action.payload];
            return initialState;

        default:
            throw new Error(`La accion "${action.type}" aun no esta implementada`);
            
    }
}