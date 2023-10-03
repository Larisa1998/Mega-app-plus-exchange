import Login from "../Pages/Login"
import React from "react";
// REDUX verify
import { useSelector } from "react-redux";

const Auth = ({children}) => {
    // REDUX verify
    const users = useSelector((state) => state.users.users.map(user =>  user));
    const isLogged = localStorage.getItem('logged');

    if(isLogged)
        return React.cloneElement(children,{users:users})
    else return <Login />
}
export default Auth;