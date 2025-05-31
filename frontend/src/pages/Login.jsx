import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      password
    };
    // call backend API here with fetch or axios
      try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(payload)
      });
        if (!response.ok) {
          throw new Error("Request failed with status: " + response.status);
        }
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error("Error:", err.message);
      }
    console.log('Logging in:', username, password);
    // after login, redirect
    navigate('/dashboard');
  };

  return (
    <div id="homePage">
      <div className="page-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
