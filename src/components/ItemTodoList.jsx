export const ItemTodoList = ({ todo, onDeleteTodo, onUpdateTodo }) => {
    return (
        <li className="list-group-item">
            {todo.done ? `✅ ` : `⬜ `}
            <h5 className={`align-self-center ms-3 w-100 d-inline ${todo.done?'text-decoration-line-through':''}`} onClick={() => onUpdateTodo(todo)}>{todo.description}</h5>
            <button onClick={() => onDeleteTodo(todo)} className="btn btn-outline-danger float-end">❌</button>
        </li>
    )
}
