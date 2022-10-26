import React, { useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Signup = ({toggleModal}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [teamName, setTeamName] = useState("");
    const [username, setUsername] = useState("");

    

  
    const navigate = useNavigate();
  
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await authService.signup(email, password, teamName,username).then(
          (response) => {
            // check for token and user already exists with 200
            //   console.log("Sign up successfully", response);
            navigate("/");
            // window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
      }
      toggleModal()
    };
  
    return (
      <div>
        <form onSubmit={handleSignup}>
          <h3>Sign up</h3>
          <input
            type="email"
            placeholder="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            minLength={5}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Team Name"
            value={teamName}
            required
            minLength={4}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            minLength={4}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Sign up</button>
        </form>

        
        

      </div>
    );
  };
  
  export default Signup;
