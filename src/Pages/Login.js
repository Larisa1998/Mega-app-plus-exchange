import FloatingForm from "../Components/FloatingForm/FloatingForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const login = () => {
        dispatch(loginUser({
            username: username,
            password: password
        }));
    }

    const loginInputs = [
        {
            placeholder: 'username...',
            defaultValue: username,
            setValue: setUsername
        },
        {
            placeholder: 'password...',
            defaultValue: password,
            setValue: setPassword
        },
    ]
    const loginButton = {
        text: 'Submit',
        onClick: login,
        style: 'success'
    };

    return (
        <main className="full-size d-flex justify-content-center align-items-center login-form">
            <FloatingForm title={'Log in'} inputs={loginInputs} submit={loginButton} />
        </main>
    )
}
export default Login;