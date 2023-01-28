import React, {useEffect,useState} from "react";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import "./login.css"
import logo from '../Auth/logo.png'
const LoginForm = () => {

    const navigate = useNavigate();

function handleClick(){
    navigate("/dashboard")

}

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
        
    })
    return (
        <div className="cover">
            <img src = {logo} alt=''/>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={(e) => handleClick()}>Login</div>

        

            
        </div>
    )
}

export default LoginForm