import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './auth.css';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        profession: 'Student'
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(formData));
        navigate('/login')
    };

    return (
        <div className="master-container">
            <div className="container">
                <div className="intro-container">
                    <h2>Sign UP</h2>
                    <p>I have an account, <span onClick={() => navigate('/login')}>sign in</span></p>
                </div>

                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </label>
                    <label>
                        Profession:
                        <select name="profession" value={formData.profession} onChange={handleChange}>
                            <option value="Student">Student</option>
                            <option value="Engineer">Engineer</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Farmer">Farmer</option>
                            <option value="Business Man">Business Man</option>
                        </select>
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>

    );
}

export default Signup;
