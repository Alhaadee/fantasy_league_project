import React from 'react'

export default function Login() {
  
    

    const key = process.env.SECRET_KEY;

    const login = async (userDetails) => {
        const response = await fetch("http://localhost:8080/auth/login",{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(userDetails)
        })
        const accessToken = response.json().accessToken
        // console.log(response.json());
    }
  
  
    // login({
    //     email:"sakusan@test.com",
    //     password:"12345"
    // })
  
  
  
    return (
    <div>Login</div>
  )
}
