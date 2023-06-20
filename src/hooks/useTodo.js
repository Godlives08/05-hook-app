import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';


const initialState = [

]

const getTodoLS = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, getTodoLS);

    const todosPendientes = todos.filter(x => !x.done).length;
    const allTodos = todos.length;

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

    return {
        todos, todosPendientes, allTodos, handleNewTodo, handleDeleteTodo, handleUpdateTodo
    }
}


