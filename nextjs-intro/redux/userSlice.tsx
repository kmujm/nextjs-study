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

export const userSlice = createSlice({
    name:"auth",
    initialState: {
        user: "test",
        token: "sldkfjldfa2l3k" /*getInitialValues().token*/ ,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;
            // localStorage.setItem("user", action.payload);
            // localStorage.setItem("token", action.payload.token);
        },
        logout: (state) => {
            state.token = "" /* null */;
            // localStorage.removeItem("user")
            // localStorage.removeItem("token")
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;