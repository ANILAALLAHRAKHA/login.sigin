import React, { useState } from "react";
import './App.css'
import Signup from './signup/signup'
import Login from './form/Login'

const App = () => {
  const [isloggedIn,setIsLoggedIn] = useState(true)
   
  const toggle = ()=>{   
    setIsLoggedIn(!isloggedIn)
  }   
  return (

    <div>

      {   
        isloggedIn ?<Login  clickFunc={toggle}/>:  <Signup clickFunc={toggle}/>
      }

    </div>
  );
};


export default App
