import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { FormAddTodo, TodoList } from "../components";


const initialState = [
    {
        id: new Date().getTime(),
        description: 'Agregar tarea',
        done: true,
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleTodo = (newTodo) => {
        const addNewTodo = {
            type: 'ADD',
            payload: newTodo
        }
        dispatch(addNewTodo);
    }

    return (
        <>
            <h1>Lista de Tareas</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <FormAddTodo onHandleTodo={handleTodo} />

                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <h1>Por hacer: <small>10</small></h1>
                                </div>
                                <div className="col-6">
                                    <h1>Pendientes: <small>5</small></h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <TodoList todos={todos} />
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}
