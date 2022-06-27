import { createSlice } from '@reduxjs/toolkit'

const getInitialValues = () => {
    let isLogin: boolean = false;
    const token = localStorage.getItem("token")
    if(token) {
        isLogin = true;
    }
    return {
        token
    }
} 

const initialState = {
    isAuthenticated : false,
    value : {
        user: "test",
        token: "sdfadfad",
    }
}

export const userSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.value = action.payload;
            // localStorage.setItem("user", action.payload);
            // localStorage.setItem("token", action.payload.token);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.value = {
                user : "",
                token: ""

            } /* null */;
            // localStorage.removeItem("user")
            // localStorage.removeItem("token")
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;