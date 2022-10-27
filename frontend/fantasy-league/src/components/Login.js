import React, { useState}  from "react"
import  { Link, useNavigate } from "react-router-dom"
import authService from "../services/auth.service";
import '../styles/Login.css';

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogIn = async (event) => {
        event.preventDefault();
        try {
            await authService.login(email,password).then (
                () => {
                    navigate("/");
                    window.location.reload();
                },

               
            );

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="form-container">
            
            <h3>Log In</h3>
            <form onSubmit={handleLogIn}>
            <input 
                type="text"
                placeholder="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />

                <button type="submit">Login</button>

            </form>
            <p>No account? <Link to={"/signup"}> Sign up here</Link></p>

            </div>
    )
}
export default LogIn;