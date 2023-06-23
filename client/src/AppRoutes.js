import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./component/Home";
import { Services } from "./component/Services";
import { Login } from "./component/Login";

export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/signin' element = {<Login/>}/>
                <Route path = '/services' element = {<Services/>}/>
            </Routes>
        </div>
    )
}