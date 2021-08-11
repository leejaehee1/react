import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormComponent from '../account/login/LoginFormComponent';
import ManagementTamplate from '../management/ManagementTamplate';
import PunchListComponent from '../punchlist/PunchListComponent';

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/admin" component={ManagementTamplate} />
                <Route path="/list" component={PunchListComponent} />
                <Route path="/" component={LoginFormComponent} />
            </Switch>
        </div>
    )
}

export default AppRouter;