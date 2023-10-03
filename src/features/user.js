import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 1,
            username: 'george',
            password: 'george',
            isLogged: false
        }
    ]
}

export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.users.forEach((user) => {
                if(user.username === action.payload.username && user.password === action.payload.password && !user.isLogged) {
                    user.isLogged = true;
                    localStorage.setItem('logged', 'true');
                }
            })
        },
        logoutUser: (state) => {
            state.users.forEach((user) => {
                user.isLogged = false;
                localStorage.removeItem('logged');
            })
        }
    }
})

export const { loginUser, logoutUser } = usersSlice.actions;

export default usersSlice.reducer;