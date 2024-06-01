import React, { createContext, useState } from "react";
export const UserContext = createContext();
export default function AuthContext({ children }) {
    const [user, setUser] = useState();
    const userAuth = JSON.parse(localStorage.getItem("user")) ?? "";
    const value = {
        user,
        setUser,
        userAuth,
    };
    return (
        <div>
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        </div>
    );
}
