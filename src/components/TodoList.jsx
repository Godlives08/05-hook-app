import { ItemTodoList } from "./"

export const TodoList = ({todos}) => {
    return (
        <>
            <ul className="list-group ">
                {
                    todos.map(todo => (
                        <ItemTodoList key={todo.id} todo={todo}/>
                    ))
                }
            </ul>
        </>
    )
}
