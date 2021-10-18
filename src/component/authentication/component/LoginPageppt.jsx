import "./styles/LoginPageppt.css";
// import './styles/detailselector.css'

import { useState } from 'react';

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