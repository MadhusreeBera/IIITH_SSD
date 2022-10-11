import React, { useState } from 'react';

const Login = () => {
  const [roll, setRoll] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState('STUDENT');

  const handleLogin = () => {
    const user = {
      roll,
      password,
      role: type,
    };
    console.log(user);

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8',
      }),
      body: JSON.stringify(user),
    })
      .then((res) => res.json()) // must include this
      .then((res) => {
        console.log('hello');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRegister = () => {
    const user = {
      roll,
      password,
      role: type,
    };
    console.log(user);

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8',
      }),
      body: JSON.stringify(user),
    })
      .then((res) => res.json()) // must include this
      .then((res) => {
        console.log('hello');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginForm">
      Re-Eval Portal
      <input
        type="number"
        placeholder="Roll Number"
        name="roll"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      ></input>
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="STUDENT">Student</option>
        <option value="TA">TA</option>
      </select>
      <button onClick={handleRegister}>Sign Up</button>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
