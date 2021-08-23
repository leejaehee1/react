import * as React from "react";
import { Route } from 'react-router-dom';
import SignUpPage from "./component/authentication/component/SignUpPage";

export default [
    <Route exact path="/signup" component={SignUpPage} />,
    // <Route exact path="/bar" component={Bar} />,
];