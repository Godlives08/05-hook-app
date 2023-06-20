import { useState } from "react"
import { useForm } from "../hooks";

export const FormAddTodo = ({ onNewTodo }) => {

    const { description, onInputChange, resetForm } = useForm({ description: '' })
    const onSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        onNewTodo(newTodo);
        resetForm(event);
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Agregar Tarea
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-9">
                                <input
                                    type="text"
                                    placeholder="Por hacer"
                                    className="form-control"
                                    name="description"
                                    value={description}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="col-3">
                                <button type="submit" className="btn btn-outline-primary">
                                    Agregar
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
