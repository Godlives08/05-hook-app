import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { FormAddTodo, TodoList } from "../components";


const initialState = [

]

const getTodoLS = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, getTodoLS);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos])


    const handleNewTodo = (newTodo) => {
        const addNewTodo = {
            type: 'ADD',
            payload: newTodo
        }
        dispatch(addNewTodo);
    }

    const handleDeleteTodo = (deleteTodo) => {
        const delTodo = {
            type: 'DELETE',
            payload: deleteTodo
        }
        dispatch(delTodo);
    }

    const handleUpdateTodo = (updateTodo) => {
        const updTodo = {
            type: 'UPDATE',
            payload: updateTodo
        }
        dispatch(updTodo);
    }

    return (
        <>
            <h1>Lista de Tareas</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <FormAddTodo onNewTodo={handleNewTodo} />

                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <h1 className="display-6">Pendientes: <small>{todos.filter(x => x.done === false).length}</small></h1>
                                </div>
                                <div className="col-6">
                                    <h1 className="display-6 float-end">Total de Tareas: <small>{todos.length}</small></h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleUpdateTodo}/>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}
