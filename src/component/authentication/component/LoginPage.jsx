import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin} from 'react-admin';
// import { MuiThemeProvider } from '@material-ui/core/styles';
import LoginSide from './LoginSide';
import LoginPageppt from './LoginPageppt';

class LoginPage extends Component {
    submit = (e) => {
        e.preventDefault();
        // gather your data/credentials here
        const credentials = { };

        // Dispatch the userLogin action (injected by connect)
        this.props.userLogin(credentials);
    }

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
                {/* <LoginSide /> */}
                <LoginPageppt />
                {/* <Login
                // A random image that changes everyday
                backgroundImage="https://source.unsplash.com/random/1600x900/daily"
                /> */}
            </>
    )}
};

export default connect(undefined, { userLogin })(LoginPage);



// import * as React from 'react';
// import { useState } from 'react';
// import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
// import { ThemeProvider } from '@material-ui/styles';
// import { createMuiTheme } from '@material-ui/core/styles';

// function LoginPage({ theme }) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const login = useLogin();
//     const notify = useNotify();
//     const submit = e => {
//         e.preventDefault();
//         // will call authProvider.login({ email, password })
//         login({ email, password }).catch(() =>
//             notify('Invalid email or password')
//         );
//     };

//     return (
//         <>
//             <form onSubmit={submit}>
//                 <input
//                     name="email"
//                     type="email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                 />
//                 <input
//                     name="password"
//                     type="password"
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                 />
//             </form>
//             <Notification />
//         </>
//     );
// };

// export default LoginPage;