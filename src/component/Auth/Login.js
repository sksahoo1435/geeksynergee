import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && userData.email === loginData.email && userData.password === loginData.password) {
            console.log('Login successful');
            sessionStorage.setItem('isLog', JSON.stringify('true'));
            setTimeout(() => { navigate('/home') }, 2000)
        } else {
            alert('Invalid Credentials');
        }
    };

    return (
        <div className="master-container">
            <div className="container">

                <div className="intro-container">
                    <h2>LogIn</h2>
                    <p>I don't have an account, <span onClick={() => navigate('/')}>sign up</span></p>
                </div>

                <form onSubmit={handleLogin}>
                    <label>
                        Email:
                        <input type="email" name="email" value={loginData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value={loginData.password} onChange={handleChange} required />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
