import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, HomePage, LoginPage } from "./"
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks"
import { NavBar } from "../components"
import { TodoApp } from "../08-useReducer/TodoApp"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="pokedex" element={<MultipleCustomHooks />} />
                <Route path="todolist" element={<TodoApp />} />

                <Route path="/*" element={<Navigate to={"/"} />} />
            </Routes>
        </UserProvider>
    )
}
