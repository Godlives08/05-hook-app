import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);


    return (
        <>
            <h1>Login Page</h1>
            <hr />
            <h2>{user?.name}</h2>
            <br />

            <button
                className="btn btn-primary"
                onClick={() => setUser({ id: 123, name: 'Manuel', email: 'manuel@dominio.com' })}
            >
                Login
            </button>

        </>
    )
}
