import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./component/Home";
import { Services } from "./component/Services";
import { Login } from "./component/Login";
import { RegisterForm } from "./component/Register";
import { Address } from "./component/Services_components/Address";

export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/signin' element = {<Login/>}/>
                <Route path = '/register' element = {<RegisterForm/>}/>
                <Route path = '/services' element = {<Services/>}/>
                <Route path = '/address' element = {<Address/>}/>
            </Routes>
        </div>
    )
}