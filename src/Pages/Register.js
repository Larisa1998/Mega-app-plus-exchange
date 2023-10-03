import FloatingForm from "../Components/FloatingForm/FloatingForm";
import { useState } from "react";

const Register = () => {
    const [fn, setFn] = useState('');
    const [ln, setLn] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        console.log(fn, ln, username, password);
    }

    const registerInputs = [
        {
            placeholder: 'first name...',
            defaultValue: fn,
            setValue: setFn
        },
        {
            placeholder: 'last name...',
            defaultValue: ln,
            setValue: setLn
        },
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
    const registerButton = {
        text: 'Submit',
        onClick: register,
        style: 'success'
    };

    return (
        <main className="full-size d-flex justify-content-center align-items-center register-form">
            <FloatingForm title={'Register'} inputs={registerInputs} submit={registerButton} />
        </main>
    )
}
export default Register;