import loginReducer from "./loginReducer";
import {configureStore, combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    user: loginReducer,
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']
