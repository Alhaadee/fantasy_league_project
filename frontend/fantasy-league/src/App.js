import './App.css';
import HomeContainer from './containers/HomeContainer';
import { useState, useEffect } from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Signup from "./components/SignUp";



function App() {


  return (

    <HomeContainer/>
  )
}
  

export default App;