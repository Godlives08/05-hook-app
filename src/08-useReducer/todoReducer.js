export const todoReducer = (initialState = [], action = {}) => {
    switch (action.type) {
        case 'ADD':
            console.log(action);
            return [...initialState, action.payload];

        case 'DELETE':
            console.log(action);
            return initialState.filter(x => x.id !== action.payload.id);

        case 'UPDATE':
            console.log(action);
            return initialState.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });


        default:
            throw new Error(`La accion "${action.type}" aun no esta implementada`);

    }
}