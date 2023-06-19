// Estado inicial de un Reducer ;
const initialState = [{
    id: 0,
    todo: `Agrega un Valor`,
    done: false
}];

// Funcion de Reducer ;
const todoReducer = (state = initialState, action = {}) => {
  
    if (action.type === 'ADD') {
        state = [...state, action.payload];
    }

    return state;
}

// Ejecutando el reducer;
let todo = todoReducer();


// Nuevo Todo ;
let newTodo = {
    id: 1,
    todo: `Crear una Aplicacion`,
    done: false
};

// Creando action ;
const addNewTodo = {
    type: 'ADD',
    payload: newTodo
}

// Agregando new todo
todo = todoReducer(todo, addNewTodo);
console.log(todo);

