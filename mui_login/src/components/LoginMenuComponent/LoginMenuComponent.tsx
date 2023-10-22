import React, {useState} from "react";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {loginUser} from "../../asyncActions/loginUser";



const LoginMenuComponent: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [loginLogin, setLoginLogin] = useState<string>("");
    const [loginPasswod, setLoginPassword] = useState<string>("");
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLoginLogin = (e: React.ChangeEvent<any>) => {
        if (e.target.value !== undefined){setLoginLogin(e.target.value)}
    }

    const handleLoginPassword = (e: React.ChangeEvent<any>) => {
        if (e.target.value !== undefined){setLoginPassword(e.target.value)}
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoginOnClick = () => {
        dispatch(loginUser(loginLogin, loginPasswod))
        setTimeout(() => {
            handleClose()
            navigate("/");
        }, 1000);
    }

    return(
        <>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                color="inherit"
                onClick={handleClick}>Login Menu</Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <Box component="span"
                     sx={{
                         width: 250,
                         height: 120,
                     }}
                >
                    <div style={{margin: "16px"}}>
                        <div style={{marginTop: "16px"}}>
                            <TextField
                                fullWidth
                                value={loginLogin}
                                label="Username"
                                onChange={handleLoginLogin}
                            />
                        </div>
                        <div style={{marginTop: "16px"}}>
                            <TextField
                                fullWidth
                                value={loginPasswod}
                                label="Password"
                                type="password"
                                onChange={handleLoginPassword}
                            />
                        </div>
                        <div style={{marginTop: "16px"}}>
                            <Button variant="contained" onClick={handleLoginOnClick}>Sign In</Button>
                        </div>
                    </div>
                </Box>
            </Menu>
        </>
    )
}
export default LoginMenuComponent;
