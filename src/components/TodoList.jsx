import { ItemTodoList } from "./"

export const TodoList = ({todos , onDeleteTodo, onUpdateTodo}) => {
    return (
        <>
            <ul className="list-group ">
                {
                    todos.map(todo => (
                        <ItemTodoList key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}/>
                    ))
                }
            </ul>
        </>
    )
}
