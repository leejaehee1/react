import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Login } from 'react-admin';
import LoginSide from './LoginSide';

class LoginPage extends Component {
    // submit = (e) => {
    //     e.preventDefault();
    //     // gather your data/credentials here
    //     const credentials = { };

    //     // Dispatch the userLogin action (injected by connect)
    //     this.props.userLogin(credentials);
    // }

    // render() {
    //     return (
    //         <MuiThemeProvider theme={this.props.theme}>
    //             <p>asdf</p>
    //             <form onSubmit={this.submit}>
                    
    //             </form>
    //         </MuiThemeProvider>
    //     );
    // }
    render() {
        return (
            <>
                <LoginSide />
                {/* <Login
                // A random image that changes everyday
                backgroundImage="https://source.unsplash.com/random/1600x900/daily"
                /> */}
            </>
    )}
};

export default connect(undefined, { userLogin })(LoginPage);