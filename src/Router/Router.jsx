import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';

const Router = () => {
    return (
        <BrowserRouter>
        <Route path="/login" component={Login}/>
        <Route path="/forgotpassword" component={ForgotPassword}/>
        </BrowserRouter>
    );
};

export default Router;