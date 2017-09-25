import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="login" component={LoginForm} title="Please Login" initial />
            <Scene key="employeeList" component={EmployeeList} title="Employees" />
        </ Router>
    );
};

export default RouterComponent;
