
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nombre_usuario: "",
    email: "",
    password: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { nombre_usuario, email, password } = action.payload;
            state.nombre_usuario = nombre_usuario
            state.email = email
            state.password = password
        },
        changeEmail: (state, action) => {
            state.email = action.payload
        }
    } 
})

export const { addUser, changeEmail } = userSlice.actions
export default userSlice.reducer
