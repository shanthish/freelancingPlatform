import axios from 'axios';
import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate} from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        password: '',
        user:'buyer',
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
       var req=await axios.post('http://localhost:8080/signup',formData);
       if(req.data.message){
        alert("SignUp Successful");
        if(req.data.new_user.user=='buyer'){
            navigate('/buyer',{});
        }
        else{
            navigate('/seller',{state:req.data.new_user});
        }
       }
       else{
            alert("User Already Exist,Try Logging In")
       }
    }

    const navigateToLogin = () => {
        navigate('/login');
    }
    return (
        <div className="signup">

            <div className="signup-container">

                <form onSubmit={handleSubmit}>
                    <h1 style={{ alignSelf: "center" }}>Signup</h1>
                    <div className="form-elements">
                        <label htmlFor="user_name">User Name</label>
                        <input
                            id="user_name"
                            type="text"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            placeholder="Enter your User Name"
                            required
                        />
                    </div>
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
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="form-elements">
                        <label htmlFor="user">User :</label>
                        <select id="user" name="user" value={formData.user} onChange={handleChange}>
                            <option value="buyer" >Buyer</option>
                            <option value="seller">Seller</option>
                        </select>

                    </div>
                    
                    <div className="form-elements">
                        <button type="submit">Sign Up</button>
                    </div>
                    <p>Already have an account? <span style={{ cursor: "pointer", color: "" }} onClick={navigateToLogin}>Log In</span></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
