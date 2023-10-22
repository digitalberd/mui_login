import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {teal, red} from "@mui/material/colors";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const NotFoundProvider = createTheme({
    palette: {
        primary: red,
        secondary: teal,
    },
});

const NotFoundPage: React.FC = () => {
    return(
        <>
            <ThemeProvider theme={NotFoundProvider}>
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                    }}
                >
                    <Paper />
                    <Typography variant="h1" gutterBottom>
                        Page not found
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{ width: 200, padding: 1, margin: 2 }}
                    >Button1</Button>
                    <Button
                        variant="contained"
                        sx={{ width: 200, padding: 1, margin: 2 }}
                    >Button2</Button>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default NotFoundPage;
