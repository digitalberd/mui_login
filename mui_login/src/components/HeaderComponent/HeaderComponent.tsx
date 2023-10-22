import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";
import DialogComponent from "../DialogComponent/DialogComponent";
import {TextField} from "@mui/material";
import {loginUser} from "../../asyncActions/loginUser";
import {useAppDispatch} from "../../hooks/redux";
import LoginMenuComponent from "../LoginMenuComponent/LoginMenuComponent";


const DesktopComponent: React.FC = () => {
    const dispatch = useAppDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeLogin = (e: React.ChangeEvent<any>) => {
        if (e.target.value !== undefined){setLogin(e.target.value)}
    }

    const handleChangePassword = (e: React.ChangeEvent<any>) => {
        if (e.target.value !== undefined){setPassword(e.target.value)}
    }

    const handleLogin = () => {
        dispatch(loginUser(login, password))
    }


    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component={NavLink}
                            to="/"
                            sx={{ flexGrow: 1 }}
                        >
                            MUI Login
                        </Typography>
                        {/*Логининг1 - через диалоговое окно*/}
                        <DialogComponent />

                        {/*Логиниг2 - через страницу с логинингом*/}
                        <Button component={NavLink} to="/login" variant="text" color="inherit" >Login Page</Button>

                        {/*Логининг3 - через ввод данных в хедере*/}
                        <TextField
                            value={login}
                            label="Username"
                            onChange={handleChangeLogin}
                        />
                        <TextField
                            value={password}
                            label="Password"
                            type="password"
                            onChange={handleChangePassword}
                        />
                        <Button
                            variant="text"
                            color="inherit"
                            onClick={handleLogin}
                        >Login Header</Button>

                        {/*Логининг4 - как я рекомендую делать - через выпадающее меню.    */}
                        <LoginMenuComponent />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default DesktopComponent;
