import { useReducer } from "react";
import { todoReducer } from "./todoReducer";


const initialState = [
    {
        id: new Date().getDate(),
        description: 'Agregar tarea',
        done: false,
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <div className="row">
                        <div className="col-6">
                            <h1>Por hacer: <small>10</small></h1>
                        </div>
                        <div className="col-6">
                            <h1>Pendientes: <small>5</small></h1>
                        </div>
                    </div>

                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <form >
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    placeholder="Por hacer"
                                    className="form-control"
                                />
                            </div>
                            <div className="col">


                                <button type="submit" className="btn btn-outline-primary">
                                    Agregar
                                </button>
                            </div>
                        </div>

                    </form>
                </div>


                <div className="col-7">
                    <ul className="list-group">
                        {
                            todos.map(todo => (
                                <li key={todo.id} className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">{todo.description}</span>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }
                        {/* <li className="list-group-item">Item 2</li>
                        <li className="list-group-item">Item 3</li> */}
                    </ul>
                </div>

            </div>
        </>
    )
}
