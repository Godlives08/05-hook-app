export const ItemTodoList = ({todo}) => {
    return (
        <li className="list-group-item">
            {todo.done?`✅`:`⬜`}
            <span className="align-self-center ms-3">{todo.description}</span>
            <button className="btn btn-outline-danger float-end">✖️</button>
        </li>
    )
}
