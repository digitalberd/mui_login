import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import {Route, Routes, Navigate} from "react-router-dom";
import IndexPage from "../../pages/IndexPage/IndexPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";


const MainArea: React.FC = () => {
    return(
        <>
            <CssBaseline />
            <div>
                <Routes>
                    <Route path='/' element={ <IndexPage /> }/>
                    <Route path='/login' element={ <LoginPage />}/>
                    <Route path='/404' element={ <NotFoundPage />}/>
                    <Route path="*" element={ <Navigate to="/404" />}/>
                </Routes>
            </div>
        </>
    )
}

export default MainArea;
