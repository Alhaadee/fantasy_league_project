import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

const signup = (email,password,teamName, userName) => {
    return axios.post(
        "http://localhost:8080/user", {
            email,
            password,
            teamName,
            userName

        })
        .then ((response) => {
            console.log(response.data);
            return response.data
        });
};

const login = (email,password) => {
    return axios.post(API_URL + "login", {
        email,
        password,
    }).then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
    })
}

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
};

export default authService
