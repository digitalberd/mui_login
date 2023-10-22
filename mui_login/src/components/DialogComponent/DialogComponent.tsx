import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContentText, DialogTitle, TextField, DialogContent} from "@mui/material";
import {loginUser} from "../../asyncActions/loginUser";
import {useAppDispatch} from "../../hooks/redux";


const DialogComponent: React.FC = () => {
    const dispatch = useAppDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const [open, setOpen] = React.useState(false);

    const handleChangeLogin = (e: React.ChangeEvent<any>) => {
        if (e.target.value !== undefined){setLogin(e.target.value)}
    }

    const handleChangePassword = (e: React.ChangeEvent<any>) => {
        if (e.target.value !== undefined){setPassword(e.target.value)}
    }

    const handleLogin = () => {
        dispatch(loginUser(login, password))
        setTimeout(() => {
            setOpen(false);
        }, 1000);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="text" color="inherit" onClick={handleClickOpen}>
                Login Dialog
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please, log in!
                    </DialogContentText>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleLogin} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogComponent;