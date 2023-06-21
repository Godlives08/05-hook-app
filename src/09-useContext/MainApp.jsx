import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, HomePage, LoginPage } from "./"
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks"
import { NavBar } from "../components"

export const MainApp = () => {
    return (
        <>
            <NavBar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="pokedex" element={<MultipleCustomHooks />} />

                <Route path="/*" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    )
}
