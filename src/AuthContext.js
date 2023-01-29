import { useState, useEffect } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

 
export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({children}) => {
    const alert = ()=>  {
        Swal.fire("INCORRECT USERNAME OR PASSOWRD!")
    }

    const [loginaccess,setLoginaccess] = useState(false)

    const loginRequest = (email,password) => {

        const defemail = 'admin@sample.com';
        const defpassword = 'admin123'
        
        if(email === defemail && password === defpassword){
            setLoginaccess(true)
        }
        else{
            alert();
        }


    }

    return(

        <AuthenticationContext.Provider value={{loginRequest,loginaccess,setLoginaccess}}>

            {children}

        </AuthenticationContext.Provider>
    )
}