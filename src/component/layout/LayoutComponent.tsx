import React, { Component, ErrorInfo, HtmlHTMLAttributes } from 'react';
// import PropTypes from 'prop-types';
import { RouteComponentProps, withRouter } from 'react-router-dom';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import { CssBaseline, Container } from '@material-ui/core';
// import { CoreLayoutProps } from 'react-admin';

// import { Notification, Error } from 'react-admin';


class Layout extends Component<LayoutProps, LayoutState>  {
    state: LayoutState = {
        hasError: false,
        errorMessage: undefined,
        errorInfo: undefined,
    };


    render() {
        return <p>a</p>
    }
}

export default withRouter(Layout);