export const ItemTodoList = ({todo}) => {
    return (
        <li className="list-group-item">
            <input className="form-check-input me-1 mt-2" type="checkbox" value="" aria-label="..." />
            <span className="align-self-center ms-3">{todo.description}</span>
            <button className="btn btn-danger float-end">Borrar</button>
        </li>
    )
}
