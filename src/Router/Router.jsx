import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
import Dashboard from '../components/Dashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/login" exact component={Login}/>
            <Route path="/forgotpassword" exact component={ForgotPassword}/>
            <Route path="/dashboard" exact component={Dashboard}/>
        </BrowserRouter>
    );
};

export default Router;