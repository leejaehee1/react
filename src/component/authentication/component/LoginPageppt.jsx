import "./styles/LoginPageppt.css";
// import './styles/detailselector.css'

import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useLogin, useNotify } from 'react-admin';

const LoginPageppt = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
  
  
    const handleUsername = (event) => {
        console.log(event.target.value)
      setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        console.log(event.target.value)
      setPassword(event.target.value)
    }

    const submit = (event) => {
        console.log(event);
        event.preventDefault(); // 부모 tag로 이벤트 전파를 막아 준다. 화면 새로실행 막음. submit는 동작된다.
        login({ username, password }).catch(() =>
        notify('Invalid email or password')
        );
      }
  return (
    <div className="App">
      <div className="logIn">
        <p>
          Punch List <br /> Management System
        </p>
        {/* <form onSubmit={submit} name="#" action="#" method="get#" autocomplete="on"> */}
        <form onSubmit={submit} noValidate>
          <label for="loginId" className="hidden">
            ID
          </label>
          <input onChange={handleUsername} id="loginId" type="" placeholder="ID" />
          <label for="loginPassword" className="hidden">
            Password
          </label>
          <input onChange={handlePassword} id="loginPassword" type="password" placeholder="Password" />
          <label for="loginSumit" className="hidden">
            Submit
          </label>
          <button type="button" class="btn" onClick={submit}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPageppt;