import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/user';

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})