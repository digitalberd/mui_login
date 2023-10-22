import {ILoginUser} from "../types/reduxTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ILoginUser = {
    id: "",
    email: "",
    avatar_path: "no_avatar"
}

export const LoginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        redux_login (state, action: PayloadAction<ILoginUser>){
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.avatar_path = action.payload.avatar_path;
            console.log("залогинились")
            console.log(action.payload.email)
        },
        redux_logout(state){
            state.id = "";
            state.email = "";
            state.avatar_path = "";
        }
    }
})

export default LoginSlice.reducer;
