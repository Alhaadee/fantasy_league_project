import './App.css';
import HomeContainer from './containers/HomeContainer';
import { useState, useEffect } from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Signup from "./components/SignUp";



function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (

    
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      

        {currentUser ? (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                Logout
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Sign up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path='/team' element={<HomeContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;