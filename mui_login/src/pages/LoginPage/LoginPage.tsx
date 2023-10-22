import React, {useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {Paper, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {loginUser} from "../../asyncActions/loginUser";
import { useNavigate } from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleChangeLogin = (e: React.ChangeEvent<any>) => {
        if (e.target.value !== undefined){setLogin(e.target.value)}
    }

    const handleChangePassword = (e: React.ChangeEvent<any>) => {
        if (e.target.value !== undefined){setPassword(e.target.value)}
    }

    const handleLogin = () => {
        dispatch(loginUser(login, password))
        setTimeout(() => {
            navigate("/");
        }, 1000);
    }

    return(
        <>
            <CssBaseline />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                alignItems: "center",
            }}
        >
            <Box
                maxWidth="80vw"
                minWidth="60vw"
            >

                <Paper />
                <div style={{marginTop: "16px"}}>
                    <TextField
                        fullWidth
                        required
                        error={login.length===0}
                        helperText={login.length===0 && "Enter login"}
                        value={login}
                        label="Username"
                        onChange={handleChangeLogin}
                    />
                </div>
                <div style={{marginTop: "16px"}}>
                    <TextField
                        fullWidth
                        required
                        error={password.length === 0}
                        helperText={password.length === 0 && "Enter password"}
                        value={password}
                        label="Password"
                        type="password"
                        onChange={handleChangePassword}
                    />
                </div>
                <Button
                    variant="contained"
                    onClick={handleLogin}
                    disabled={login.length===0 || password.length === 0}
                    sx={{ width: 200, padding: 1, margin: 2 }}
                >Login</Button>

            </Box>
        </Box>
    </>
)
}

export default LoginPage;
