import { FormAddTodo, TodoList } from "../components";
import { useTodo } from "../hooks";




export const TodoApp = () => {

    const { todos, todosPendientes, allTodos, handleNewTodo, handleDeleteTodo, handleUpdateTodo } = useTodo();

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
                                    <h1 className="display-6">Pendientes: <small>{todosPendientes}</small></h1>
                                </div>
                                <div className="col-6">
                                    <h1 className="display-6 float-end">Total de Tareas: <small>{allTodos}</small></h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleUpdateTodo} />
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}
