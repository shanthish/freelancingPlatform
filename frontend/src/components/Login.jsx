import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/login", formData);
            console.log(response);
            if (!response.data.message) {
                alert("User Doesn't Exist ,Try Signing Up");
            }
            else {
                if(response.data.data.user=='buyer'){
                    navigate('/buyer');
                }
                else{
                    navigate('/seller',{state:response.data.data});
                }
            }

        } catch (error) {
            console.error("Login Failed:", error.response ? error.response.data : error.message);
        }
    };

    const navigateToSignUp = () => {
        navigate('/signup');
    }

    return (
        <div className="login">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-elements">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your Email"
                            required
                        />
                    </div>
                    <div className="form-elements">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            required
                        />
                    </div>
                    <div className="form-elements">
                        <button type="submit">Login</button>
                    </div>
                    <p>Don't Have Account? <span style={{ cursor: "pointer" }} onClick={navigateToSignUp}>Sign Up</span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
