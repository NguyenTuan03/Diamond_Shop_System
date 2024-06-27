import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function AuthContext({ children }) {
    const [userGoogle, setUserGoogle] = useState({})
    const userAuth = JSON.parse(localStorage.getItem("user")) ?? "";
    const userAuthGoogle = JSON.parse(localStorage.getItem("user")) ?? "";
    const loginUser = (userData) => {
        setUserGoogle(userData);
        localStorage.setItem("user", JSON.stringify(userData)); 
    };
    const logoutUser = () => {
        setUserGoogle({});
        localStorage.removeItem("user"); 
    };
    const value = {
        userAuth,
        userAuthGoogle,
        userGoogle,
        loginUser,
        logoutUser
    };
    return (
        <div>
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        </div>
    );
}
