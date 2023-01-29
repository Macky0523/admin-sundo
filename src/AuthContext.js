import { useState } from "react";
import { createContext } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({children}) => {

    const [loginaccess,setLoginaccess] = useState(false)

    const loginRequest = (email,password) => {

        const defemail = 'admin@sample.com';
        const defpassword = 'admin123'
        
        if(email === defemail && password === defpassword){
            setLoginaccess(true)
        }
        else{
            console.log('Error! did not match')
        }


    }

    return(

        <AuthenticationContext.Provider value={{loginRequest,loginaccess,setLoginaccess}}>

            {children}

        </AuthenticationContext.Provider>
    )
}