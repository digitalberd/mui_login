import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import Button from "@mui/material/Button";

const IndexPage: React.FC = () => {
    return(
        <>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <Paper />
                <Typography variant="h1" gutterBottom>
                    Main page
                </Typography>
                <Button
                    variant="contained"
                    sx={{ width: 200, padding: 1, margin: 2 }}
                >Button</Button>
            </Box>
        </>
    )
}

export default IndexPage;
