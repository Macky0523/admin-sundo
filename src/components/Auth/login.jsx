import React, {useContext, useEffect,useState} from "react";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import "./login.css"
import logo from '../Auth/logo.png'
import { AuthenticationContext } from "../../AuthContext";


const LoginForm = () => {

 const navigate = useNavigate();

 const {loginRequest} = useContext(AuthenticationContext);

 const [email,setEmail] = useState('text');
 const [password,setPassword] = useState('text');

    
    return (
        <div className="cover">

        <div className="pannel1">
            
            <img src = {logo} alt=''/>

            <div className="inputfieldcontainer">
                <input className="inputfield" type="text" placeholder="username"  onChange={(e)=>setEmail(e.target.value)}/>
                <input className="inputfield" type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>

                <div className="login-btn" onClick={(e) => {loginRequest(email,password)}}>LOGIN</div>
            </div>

        </div>
    
           
        </div>
    )
}

export default LoginForm