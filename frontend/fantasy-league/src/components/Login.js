import React, { useState}  from "react"
import  { useNavigate } from "react-router-dom"
import authService from "../services/auth.service";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [chosenUser, setChosenUser] = useState({
        userName:"",
        teamName:"",
        email:"",
        password:""
    
    })

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
        <div>

            <form onSubmit={handleLogIn}>

            <h3>Log In</h3>
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

            </div>
    )
}
export default LogIn;