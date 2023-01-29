import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Loginroutes from './Loginroutes/'
import Webroutes from './Approutes/';
import { useContext } from 'react';
import { AuthenticationProvider,AuthenticationContext } from './AuthContext';



const App = () => {

  return (
    
    <div className='App'>

    <AuthenticationProvider>
      
      <Loginchecker/>
    
    </AuthenticationProvider>
    </div>

  );
};

export default App;


export const Loginchecker = () =>{
  const {loginaccess} = useContext(AuthenticationContext)

  return(
    <BrowserRouter>
        {loginaccess ? <Webroutes/>:<Loginroutes/>}
    </BrowserRouter>
  )
}
