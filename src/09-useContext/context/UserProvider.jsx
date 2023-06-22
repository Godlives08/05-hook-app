import { useState } from "react";
import { UserContext } from "./UserContext"






export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();
    const exp = {
        user,
        setUser
    };

    return (
        <UserContext.Provider value={exp}>
            {children}
        </UserContext.Provider>
    )
}