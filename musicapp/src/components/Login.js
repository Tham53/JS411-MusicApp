import React from 'react';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import "./Login.css";

function Login(props) {
return (
<div className="formContainer">
<form onSubmit={event => props.onLogin(event)}>
<Input fullWidth placeholder="Username"></Input>
<br/>
<Input type="password" fullWidth placeholder="Password"></Input>
<br/>
<Button type="submit" fullWidth style={{marginTop: '15px'}} color="primary" variant="contained">
Login
</Button>
</form>
</div>
)
}

export default Login;