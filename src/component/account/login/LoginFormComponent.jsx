import React from 'react';
import CustomInput from './logincomponent/CustomInputComponent';
import Button from './logincomponent/ButtonComponent';
import "./styles.css";

// import AuthProvider from './AuthProvider';
// import { Admin,  Resource, ListGuesser  } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
// import PunchListComponent from '../../p?unchlist/PunchListComponent';
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

class LoginFormComponent extends React.Component {
    state = {
        email: "",
        password: ""
      };
    
      handleChange = e => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
      };
    
      render() {
        return (
          <div className="loginapp">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            <form className="form">
              <CustomInput
                labelText="Email"
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
                handleChange={this.handleChange}
                type="text"
              />
              <CustomInput
                labelText="Password"
                id="password"
                formControlProps={{
                  fullWidth: true
                }}
                handleChange={this.handleChange}
                type="password"
              />
    
              <Button type="button" color="primary" className="form__custom-button">
                Log in
              </Button>
            </form>
          </div>
        );
      }
    // return (
    //     <div>
    //     <br />
    //     <br />
    //     {/* <br /> */}
    //     {/* <br /> */}
        
    //     {/* <h1>첫페이지는 login 페이지가 등장합니다.</h1> */}
    //     <Admin dashboard={PunchListComponent} authProvider={AuthProvider} dataProvider={dataProvider}>
    //         <Resource name="users" list={ListGuesser} />
    //     </Admin>
    //     </div>
    // )
}

export default LoginFormComponent;