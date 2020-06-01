import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';
import NewUsers from '../components/NewUsers';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/login" exact component={Login}/>
            <Route path="/forgotpassword" exact component={ForgotPassword}/>
            <Route path="/dashboard"  component={Dashboard}/>
            <Route path="/dashboard/profile"  component={Profile}/>
            <Route path="/dashboard/newuser"  component={NewUsers}/>
        </BrowserRouter>
    );
};

export default Router;